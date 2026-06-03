import { useEffect, useRef, useState } from 'react';

type IntroStage =
  | 'flight'
  | 'activating'
  | 'done';

type HeroIntroSequenceProps = {
  onComplete: () => void;
};

function HeroIntroSequence({ onComplete }: HeroIntroSequenceProps) {
  const [introStage, setIntroStage] = useState<IntroStage>('flight');
  const [airplaneOn, setAirplaneOn] = useState(false);
  const completeTimerRef = useRef<number | null>(null);

  const toggleAirplaneMode = () => {
    if (introStage !== 'flight' && introStage !== 'activating') {
      return;
    }

    if (airplaneOn && introStage === 'activating') {
      if (completeTimerRef.current !== null) {
        window.clearTimeout(completeTimerRef.current);
        completeTimerRef.current = null;
      }
      setAirplaneOn(false);
      setIntroStage('flight');
      return;
    }

    setAirplaneOn(true);
    setIntroStage('activating');
    completeTimerRef.current = window.setTimeout(() => {
      completeTimerRef.current = null;
      setIntroStage('done');
      onComplete();
    }, 950);
  };

  useEffect(() => {
    return () => {
      if (completeTimerRef.current !== null) {
        window.clearTimeout(completeTimerRef.current);
      }
    };
  }, []);

  if (introStage === 'done') {
    return null;
  }

  return (
    <div className={`hero-intro-overlay hero-intro-stage-${introStage}`}>
      <div className={`hero-intro-image-stage hero-intro-flight-stage ${airplaneOn ? 'is-airplane-on' : ''}`}>
        <div className="hero-flight-side hero-flight-side-left" aria-hidden="true">
          <span>STAGE 01</span>
          <span>ENTER</span>
        </div>
        <div
          className="hero-flight-control"
        >
          <span className="hero-flight-track">
            <span className="hero-flight-copy">
              <span>AIRPLANE MODE</span>
              <span><i>&gt;&gt;&gt;</i> ENTER / SLIDE TO BEGIN</span>
            </span>
            <button
              className="hero-flight-button"
              type="button"
              onClick={toggleAirplaneMode}
              aria-label="Toggle airplane mode"
              aria-pressed={airplaneOn}
            >
              <svg
                className="hero-flight-plane-icon"
                viewBox="0 0 72 72"
                focusable="false"
              >
                <path
                  d="M59.2 35.6 39.7 38.2 29.1 58.5 24.5 58.5 29.2 39.5 16.1 39.5 9.4 47.1 6.6 47.1 10.2 35.6 6.6 24.9 9.4 24.9 16.1 32.1 29.2 32.1 24.5 13.5 29.1 13.5 39.7 31.3 59.2 33.9C61.4 34.2 61.4 35.3 59.2 35.6Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="hero-flight-side hero-flight-side-right" aria-hidden="true">
          <span>JOURNEY STARTS</span>
          <span>WITH INTENTION</span>
        </div>
        <div className="hero-flight-footer" aria-hidden="true">SLIDE TO ACTIVATE</div>
      </div>
    </div>
  );
}

export default HeroIntroSequence;
