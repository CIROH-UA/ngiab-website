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

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [stuck, setStuck] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (!isHome) return;

    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    const onScroll = () => {
      if (!wrapperRef.current) return;
      setStuck(wrapperRef.current.getBoundingClientRect().top <= 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
  }, [activeId]);

  if (!isHome) {
    return null;
  }

  return (
    <div ref={wrapperRef} style={stuck ? { height: navHeight } : undefined}>
      <nav
        ref={navRef}
        className={`z-50 flex justify-center px-4 ${
          stuck ? 'fixed top-6 left-0 right-0' : 'relative py-6'
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
                setActiveId(item.id);
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
    </div>
  );
};

export default Header;
