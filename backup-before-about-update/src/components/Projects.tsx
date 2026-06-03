import { useEffect, useRef, useState, type CSSProperties, type WheelEvent } from 'react';

const indexItems = [
  {
    number: '01',
    title: 'ABOUT ME',
    titleCn: '\u5173\u4e8e\u6211',
    href: '#about',
  },
  {
    number: '02',
    title: 'TIVA',
    titleCn: 'TIVA',
    href: '#project-tiva',
  },
  {
    number: '03',
    title: 'TIVA EVALUATION RECORD',
    titleCn: 'TIVA \u8bc4\u6d4b\u8bb0\u5f55',
    href: '#project-ai-evaluation',
  },
  {
    number: '04',
    title: 'MOOD COLOR CONCEPT',
    titleCn: '\u60c5\u7eea\u914d\u8272\u6982\u5ff5',
    href: '#project-color-palette',
  },
  {
    number: '05',
    title: 'TESTIMONIALS',
    titleCn: '\u793e\u4ea4\u8bc4\u4ef7',
    href: '#testimonials',
  },
];

function getActiveIndexFromHash() {
  if (typeof window === 'undefined') {
    return 0;
  }

  const matchedIndex = indexItems.findIndex((item) => item.href === window.location.hash);

  return matchedIndex >= 0 ? matchedIndex : 0;
}

function Projects() {
  return (
    <section id="projects" className="portfolio-index-page">
      <div className="portfolio-index-frame">
        <header className="portfolio-index-header">
          <h2>PROJECT INDEX</h2>
          <a
            href="#resume"
            className="portfolio-index-resume"
            aria-label="Open PDF resume shortcut"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 3.5h7l3 3v14H7z" />
              <path d="M14 3.5v3h3" />
              <path d="M9.5 11.5h5" />
              <path d="M9.5 14.5h5" />
            </svg>
            <span>
              <span>PDF RESUME SHORTCUT</span>
              <span>{'PDF \u7b80\u5386\u901f\u901a\u901a\u9053'}</span>
            </span>
          </a>
        </header>

        <ProjectIndexWheel />

        <a className="portfolio-index-back" href="#hero">
          {'\u2190 BACK'}
        </a>

        <a className="portfolio-index-contact" href="#contact">
          {'CONTACT INFO \u2192'}
        </a>
      </div>
    </section>
  );
}

function ProjectIndexWheel() {
  const [activeIndex, setActiveIndex] = useState(getActiveIndexFromHash);
  const lastWheelAtRef = useRef(0);

  useEffect(() => {
    const syncActiveIndex = () => setActiveIndex(getActiveIndexFromHash());

    window.addEventListener('hashchange', syncActiveIndex);

    return () => window.removeEventListener('hashchange', syncActiveIndex);
  }, []);

  const handleWheel = (event: WheelEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const now = window.performance.now();

    if (now - lastWheelAtRef.current < 220 || Math.abs(event.deltaY) < 8) {
      return;
    }

    lastWheelAtRef.current = now;

    setActiveIndex((currentIndex) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;

      return Math.min(indexItems.length - 1, Math.max(0, nextIndex));
    });
  };

  return (
    <nav
      className="portfolio-index-list portfolio-index-wheel"
      aria-label="Portfolio project index"
      data-wheel-lock="true"
      onWheelCapture={handleWheel}
    >
      {indexItems.map((item, index) => {
        const offset = index - activeIndex;
        const distance = Math.abs(offset);
        const clampedDistance = Math.min(distance, 3);
        const scale = index === activeIndex ? 1.15 : Math.max(0.78, 1 - clampedDistance * 0.085);
        const opacity = index === activeIndex ? 1 : Math.max(0.08, 0.54 - (clampedDistance - 1) * 0.16);
        const rotateX = Math.max(-18, Math.min(18, offset * -7));
        const y = offset * 4.85;
        const blur = index === activeIndex ? 0 : Math.max(0, clampedDistance - 1) * 0.45;

        return (
          <a
            aria-current={index === activeIndex ? 'page' : undefined}
            className="portfolio-index-item"
            data-active={index === activeIndex}
            data-distance={clampedDistance}
            href={item.href}
            key={item.number}
            onClick={() => setActiveIndex(index)}
            style={
              {
                '--wheel-y': `${y.toFixed(2)}rem`,
                '--wheel-rotate': `${rotateX.toFixed(2)}deg`,
                '--wheel-scale': scale.toFixed(3),
                '--wheel-opacity': opacity.toFixed(3),
                '--wheel-blur': `${blur.toFixed(2)}px`,
                '--wheel-z': indexItems.length - clampedDistance,
              } as CSSProperties
            }
          >
            <span className="portfolio-index-main">
              <span className="portfolio-index-label">
                {item.number}-{item.title}
              </span>
              <span className="portfolio-index-dash" aria-hidden="true" />
              <span className="portfolio-index-number">{item.number}</span>
            </span>
            <span className="portfolio-index-cn">
              <span className="portfolio-index-label">
                {item.number}-{item.titleCn}
              </span>
              <span className="portfolio-index-dash" aria-hidden="true" />
              <span className="portfolio-index-number">{item.number}</span>
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default Projects;
