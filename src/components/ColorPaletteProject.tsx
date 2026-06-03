import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

const titleLetters = ['M', 'O', 'O', 'D'];

const primarySwatches = [
  { name: 'SAGE', className: 'mood-color-swatch-sage' },
  { name: 'SAND', className: 'mood-color-swatch-sand' },
  { name: 'ACCENT', className: 'mood-color-swatch-accent' },
];

const smallSwatches = [
  { name: 'MIST', className: 'mood-color-chip-mist' },
  { name: 'ROSE', className: 'mood-color-chip-rose' },
  { name: 'MOSS', className: 'mood-color-chip-moss' },
  { name: 'STONE', className: 'mood-color-chip-stone' },
];

const stripSegments = [
  'mood-color-strip-sage',
  'mood-color-strip-moss',
  'mood-color-strip-sand',
  'mood-color-strip-mist',
  'mood-color-strip-rose',
  'mood-color-strip-clay',
  'mood-color-strip-wheat',
  'mood-color-strip-stone',
];

function ColorPaletteProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationRun, setAnimationRun] = useState(0);
  const wasInViewRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInViewRef.current) {
          wasInViewRef.current = true;
          setAnimationRun((currentRun) => currentRun + 1);
          return;
        }

        if (!entry.isIntersecting) {
          wasInViewRef.current = false;
        }
      },
      { threshold: 0.42 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="project-color-palette"
      className={`mood-color-page ${animationRun > 0 ? 'mood-color-page-visible' : ''}`}
    >
      <div className="mood-color-frame" aria-label="Mood Color Project">
        <nav className="mood-color-nav" aria-label="Mood color project navigation">
          <a href="#projects" className="mood-color-return-link">
            <span>← Project Index</span>
            <span>返回目录</span>
          </a>
          <a href="#hero" className="mood-color-return-link">
            <span>← Hero Section</span>
            <span>返回首页</span>
          </a>
        </nav>

        <header className="mood-color-hero-title" aria-label="Mood Color" key={`title-${animationRun}`}>
          <span className="mood-color-word mood-color-word-main" aria-hidden="true">
            {titleLetters.map((letter, index) => (
              <span style={{ '--letter-index': index } as CSSProperties} key={`${letter}-${index}`}>
                {letter}
              </span>
            ))}
          </span>
          <span className="mood-color-word mood-color-word-sub" aria-hidden="true">COLOR</span>
        </header>

        <div className="mood-color-rule" aria-hidden="true" />

        <section className="mood-color-panel" aria-label="Mood color palette direction">
          <div className="mood-color-copy" aria-label="Mood color introduction" key={`copy-${animationRun}`}>
            <h3>把感觉变成配色灵感</h3>
            <p className="mood-color-subtitle">Turn a vague mood into usable color inspiration.</p>
            <div className="mood-color-input">
              <strong>“安静、柔软、但有一点力量”</strong>
              <span>mood sentence</span>
            </div>
            <p className="mood-color-note" aria-hidden="true" />
          </div>

          <div className="mood-color-divider" aria-hidden="true" />

          <div className="mood-color-palette" aria-label="Palette direction">
            <div className="mood-color-palette-heading">
              <h3>PALETTE DIRECTION</h3>
              <p>quiet / warm / grounded</p>
            </div>
            <div className="mood-color-primary-swatches" key={`primary-${animationRun}`}>
              {primarySwatches.map((swatch, index) => (
                <div
                  className={`mood-color-primary-swatch ${swatch.className}`}
                  style={{ '--swatch-index': index } as CSSProperties}
                  key={swatch.name}
                >
                  <span>{swatch.name}</span>
                </div>
              ))}
            </div>
            <div className="mood-color-small-swatches" key={`small-${animationRun}`}>
              {smallSwatches.map((swatch, index) => (
                <div
                  className="mood-color-small-swatch-wrap"
                  style={{ '--chip-index': index } as CSSProperties}
                  key={swatch.name}
                >
                  <span className={`mood-color-small-swatch ${swatch.className}`} />
                  <strong>{swatch.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mood-color-strip-area" aria-label="Mood color progress palette">
          <div className="mood-color-strip" aria-hidden="true" key={`strip-${animationRun}`}>
            {stripSegments.map((segment, index) => (
              <span className={segment} style={{ '--strip-index': index } as CSSProperties} key={segment} />
            ))}
          </div>
          <div className="mood-color-strip-labels">
            <span>MOOD COLOR / 色彩灵感工具构思</span>
            <span>PROJECT IN PROGRESS</span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ColorPaletteProject;