import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NAV_ITEMS = [
  { id: 'tool', label: 'NGIAB' },
  { id: 'nrds', label: 'NRDS' },
  { id: 'run-ways', label: 'CCNH', activateTab: 'jupyterhub' },
  { id: 'ngiab-demo', label: 'Demo' },
  { id: 'contribute', label: 'Contribute' },
  { id: 'blog', label: 'News' },
];

export const RUN_WAYS_TAB_EVENT = 'run-ways:set-tab';

const SCROLL_OFFSET = 96;

const scrollWithOffset = (el) => {
  const y = el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const CLICK_SCROLL_LOCK_MS = 800;

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const containerRef = useRef(null);
  const clickLockRef = useRef(false);
  const clickLockTimeoutRef = useRef(null);
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => () => clearTimeout(clickLockTimeoutRef.current), []);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return;
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: '-110px 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const updatePill = () => {
      const activeEl = containerRef.current?.querySelector(`[data-nav-id="${activeId}"]`);
      if (activeEl) {
        setPillStyle({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
      }
    };
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [activeId, visible]);

  if (!isHome) {
    return null;
  }

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
    >
      <div
        ref={containerRef}
        className="relative flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-3 shadow-lg overflow-x-auto max-w-[92vw] [&::-webkit-scrollbar]:hidden"
      >
        <div
          className="absolute top-3 bottom-3 rounded-full bg-primary transition-all duration-300 ease-out"
          style={{ left: pillStyle.left, width: pillStyle.width }}
        />
        {NAV_ITEMS.map((item) => (
          <HashLink
            key={item.id}
            smooth
            scroll={scrollWithOffset}
            to={`/#${item.id}`}
            data-nav-id={item.id}
            onClick={() => {
              clickLockRef.current = true;
              setActiveId(item.id);
              clearTimeout(clickLockTimeoutRef.current);
              clickLockTimeoutRef.current = setTimeout(() => {
                clickLockRef.current = false;
              }, CLICK_SCROLL_LOCK_MS);
              if (item.activateTab) {
                window.dispatchEvent(new CustomEvent(RUN_WAYS_TAB_EVENT, { detail: item.activateTab }));
              }
            }}
            className={`relative z-10 whitespace-nowrap px-6 py-3 rounded-full text-base font-medium transition-colors duration-300 ${
              activeId === item.id ? 'text-white' : 'text-slate-600 hover:text-primary'
            }`}
          >
            {item.label}
          </HashLink>
        ))}
      </div>
    </nav>
  );
};

export default Header;
