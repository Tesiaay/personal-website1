import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import EvaluationReportProject from './components/EvaluationReportProject';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ColorPaletteProject from './components/ColorPaletteProject';
import LoadingTransition from './components/LoadingTransition';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Support from './components/Support';
import Testimonials from './components/Testimonials';
import TivaProject from './components/TivaProject';

function App() {
  const scrollRef = useRef<HTMLElement>(null);
  const [isLoadingTransitionVisible, setIsLoadingTransitionVisible] = useState(true);

  useEffect(() => {
    let transitionTimer = window.setTimeout(() => {
      setIsLoadingTransitionVisible(false);
    }, 850);

    const showTransition = () => {
      window.clearTimeout(transitionTimer);
      setIsLoadingTransitionVisible(true);

      transitionTimer = window.setTimeout(() => {
        setIsLoadingTransitionVisible(false);
      }, 720);
    };

    window.addEventListener('hashchange', showTransition);

    return () => {
      window.clearTimeout(transitionTimer);
      window.removeEventListener('hashchange', showTransition);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      const target = event.target;

      if (!isDesktop || event.ctrlKey) {
        return;
      }

      if (target instanceof Element && target.closest('[data-wheel-lock="true"]')) {
        return;
      }

      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      event.preventDefault();
      scrollContainer.scrollBy({
        left: event.deltaY,
        behavior: 'auto',
      });
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <main ref={scrollRef} className="horizontal-scroll">
        <section className="horizontal-panel" aria-label="Hero">
          <Hero />
        </section>
        <section className="horizontal-panel" aria-label="Project index">
          <Projects />
        </section>
        <section className="horizontal-panel" aria-label="About me">
          <About />
        </section>
        <section className="horizontal-panel" aria-label="Tiva project detail">
          <TivaProject />
        </section>
        <section className="horizontal-panel" aria-label="AI evaluation and iteration report">
          <EvaluationReportProject />
        </section>
        <section className="horizontal-panel" aria-label="AI color palette app concept">
          <ColorPaletteProject />
        </section>
        <section className="horizontal-panel" aria-label="Testimonials">
          <Testimonials />
        </section>
        <section className="horizontal-panel" aria-label="Resume archive">
          <Resume />
        </section>
        <section className="horizontal-panel" aria-label="Support note">
          <Support />
        </section>
        <section className="horizontal-panel" aria-label="Contact">
          <Footer />
        </section>
      </main>
      <LoadingTransition isVisible={isLoadingTransitionVisible} />
    </>
  );
}

export default App;
