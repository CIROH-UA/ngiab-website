import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

const PACKAGE_NAME = 'ngiab-data-preprocess';
const TRACKED_VERSIONS = ['4.6.7', '4.6.6', '4.6.5', '4.6.4', '4.6.3'];
const DAYS_IN_THREE_MONTHS = 90;
const PEPY_PAGE_URL = 'https://pepy.tech/projects/ngiab-data-preprocess?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=daily&viewType=line&versions=4.6.7%2C4.6.6%2C4.6.5%2C4.6.4%2C4.6.3';
const STATUS_DASHBOARD_URL = 'https://ciroh-community-ngen-datastream.s3.amazonaws.com/status/dashboard.html';
const TARGET_PULLS = 15000;

const DockerPullCounter = () => {
  const [dockerLoading, setDockerLoading] = useState(true);
  const [dockerError, setDockerError] = useState(null);
  const [pullCount, setPullCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOpacity, setConfettiOpacity] = useState(1);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  const [pepyLoading, setPepyLoading] = useState(true);
  const [pepyError, setPepyError] = useState(null);
  const [totalDownloads, setTotalDownloads] = useState(0);
  const [versionTotals, setVersionTotals] = useState({});
  const [recentTotal, setRecentTotal] = useState(0);
  const [dashboardInfo, setDashboardInfo] = useState({
    loading: true,
    lastUpdated: '',
    dataFetchDuration: '',
    latestDate: '',
    latestComplete: '',
    latestTotal: '',
    latestPercent: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (pullCount > 0) {
            animateDockerProgress(pullCount);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, pullCount]);

  const animateDockerProgress = (currentPullCount) => {
    const targetProgress = Math.min((currentPullCount / TARGET_PULLS) * 100, 100);
    if (targetProgress <= 0) {
      setAnimatedProgress(0);
      setAnimatedCount(0);
      return;
    }

    let currentProgress = 0;
    const duration = 2000;
    const steps = 50;
    const increment = targetProgress / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= targetProgress) {
        currentProgress = targetProgress;
        clearInterval(timer);

        setShowConfetti(true);
        setConfettiOpacity(1);

        setTimeout(() => {
          setConfettiOpacity(0);
          setTimeout(() => setShowConfetti(false), 500);
        }, 3000);
      }

      setAnimatedProgress(currentProgress);
      setAnimatedCount(Math.floor((currentProgress / targetProgress) * currentPullCount));
    }, stepDuration);
  };

  useEffect(() => {
    const fetchDockerCount = async () => {
      try {
        const response = await fetch('https://dockerhub-api-manjilasingh-manjilas-projects.vercel.app/api/docker');
        const data = await response.json();
        const currentPullCount = Number(data.pull_count || 0);
        setPullCount(currentPullCount);

        if (!hasAnimated) {
          setAnimatedCount(currentPullCount);
          setAnimatedProgress(Math.min((currentPullCount / TARGET_PULLS) * 100, 100));
        }
        setDockerError(null);
      } catch (fetchError) {
        console.error('Error fetching docker pull count:', fetchError);
        setDockerError('Failed to fetch Docker pull stats');
      } finally {
        setDockerLoading(false);
      }
    };

    const fetchPepyStats = async () => {
      try {
        const token = import.meta.env.VITE_PEPY_TECH_TOKEN || import.meta.env.PEPY_TECH_TOKEN;

        if (!token) {
          throw new Error('Missing Pepy API key in environment variables.');
        }

        const response = await fetch(`/pepy-api/api/v2/projects/${PACKAGE_NAME}`, {
          headers: {
            'X-API-Key': token,
          },
        });

        if (!response.ok) {
          throw new Error(`Pepy API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const downloadEntries = Object.entries(data.downloads || {});
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - DAYS_IN_THREE_MONTHS);

        const computedVersionTotals = TRACKED_VERSIONS.reduce((accumulator, version) => {
          accumulator[version] = 0;
          return accumulator;
        }, {});

        downloadEntries.forEach(([dateString, dayValues]) => {
          const date = new Date(dateString);
          if (date >= cutoffDate) {
            TRACKED_VERSIONS.forEach((version) => {
              computedVersionTotals[version] += Number(dayValues?.[version] || 0);
            });
          }
        });

        const computedRecentTotal = Object.values(computedVersionTotals).reduce(
          (sum, value) => sum + value,
          0
        );

        setTotalDownloads(Number(data.total_downloads || 0));
        setVersionTotals(computedVersionTotals);
        setRecentTotal(computedRecentTotal);
        setPepyError(null);
      } catch (fetchError) {
        console.error('Error fetching Pepy stats:', fetchError);
        setPepyError('Failed to fetch package download stats');
      } finally {
        setPepyLoading(false);
      }
    };

    const fetchDashboardInfo = async () => {
      try {
        const response = await fetch(STATUS_DASHBOARD_URL);
        if (!response.ok) {
          throw new Error(`Dashboard request failed with status ${response.status}`);
        }

        const html = await response.text();
        const flattened = html.replace(/\s+/g, ' ');

        const updatedMatch = flattened.match(/Last updated:\s*([^|<]+?)\s*\|\s*Data fetched in\s*([0-9.]+s)/i);
        const completionMatch = flattened.match(/(\d{4}-\d{2}-\d{2})\s*(\d+)\s*\/\s*(\d+)\s*\(([\d.]+)%\)/);

        setDashboardInfo({
          loading: false,
          lastUpdated: updatedMatch?.[1]?.trim() || '',
          dataFetchDuration: updatedMatch?.[2]?.trim() || '',
          latestDate: completionMatch?.[1] || '',
          latestComplete: completionMatch?.[2] || '',
          latestTotal: completionMatch?.[3] || '',
          latestPercent: completionMatch?.[4] || '',
        });
      } catch (fetchError) {
        console.error('Error fetching dashboard info:', fetchError);
        setDashboardInfo((previous) => ({ ...previous, loading: false }));
      }
    };

    fetchDockerCount();
    fetchPepyStats();
    fetchDashboardInfo();

    const interval = setInterval(() => {
      fetchDockerCount();
      fetchPepyStats();
      fetchDashboardInfo();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="space-y-10">
      {showConfetti && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: confettiOpacity,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={450}
            recycle={false}
            gravity={0.2}
            initialVelocityY={5}
            colors={['#FFD700', '#FFA500', '#FF69B4', '#00CED1', '#7B68EE']}
          />
        </div>
      )}

      <div className="space-y-4">
        {dockerLoading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : dockerError ? (
          <p className="text-center text-gray-500">{dockerError}</p>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <i className="fab fa-docker text-primary text-3xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">NGIAB Docker Pulls</h4>
                  <p className="text-gray-500">awiciroh/ciroh-ngen-image</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{animatedCount.toLocaleString()}</div>
                <div className="text-gray-500">total pulls</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Progress to {TARGET_PULLS.toLocaleString()} pulls</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                <div
                  style={{ width: `${animatedProgress}%` }}
                  className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 pt-8">
        {pepyLoading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
          </div>
        ) : pepyError ? (
          <p className="text-center text-gray-500">{pepyError}</p>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <i className="fab fa-python text-primary text-3xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">NGIAB Package Downloads</h4>
                  <p className="text-gray-500">{PACKAGE_NAME} on Pepy</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{totalDownloads.toLocaleString()}</div>
                <div className="text-gray-500">all-time downloads</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-gray-800">Last 3 Months (Selected Versions)</h5>
                <span className="text-primary font-bold">{recentTotal.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-500">Version filter: 4.6.7, 4.6.6, 4.6.5, 4.6.4, 4.6.3</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {TRACKED_VERSIONS.map((version) => (
                <div key={version} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                  <div className="text-sm text-gray-500">v{version}</div>
                  <div className="text-2xl font-bold text-gray-800">{(versionTotals[version] || 0).toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div>
              <a
                href={PEPY_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                View detailed Pepy chart
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 pt-8">
        <a
          href={STATUS_DASHBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">NRDS Status Dashboard</h4>
              <p className="text-gray-600 mt-1">
                Live operations dashboard for daily NRDS runs, including completion tracking by forecast setup and quick visibility into below-target days.
              </p>
              {dashboardInfo.loading ? (
                <p className="text-sm text-gray-500 mt-3">Loading latest dashboard details...</p>
              ) : (
                <div className="mt-3 space-y-1 text-sm text-gray-500">
                  {dashboardInfo.lastUpdated && (
                    <p>
                      Last updated: {dashboardInfo.lastUpdated}
                      {dashboardInfo.dataFetchDuration ? ` • Data fetched in ${dashboardInfo.dataFetchDuration}` : ''}
                    </p>
                  )}
                  {dashboardInfo.latestDate && dashboardInfo.latestComplete && dashboardInfo.latestTotal && (
                    <p>
                      Latest day ({dashboardInfo.latestDate}): {dashboardInfo.latestComplete} / {dashboardInfo.latestTotal} ({dashboardInfo.latestPercent}%) complete
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="text-primary shrink-0">
              <i className="fas fa-arrow-up-right-from-square text-xl"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DockerPullCounter;