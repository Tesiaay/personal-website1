type LoadingTransitionProps = {
  isVisible: boolean;
};

// LOCKED FINAL VERSION: Do not modify this loading overlay unless explicitly requested.
function LoadingTransition({ isVisible }: LoadingTransitionProps) {
  return (
    <div
      className={`loading-transition ${isVisible ? 'loading-transition-visible' : ''}`}
      role="status"
      aria-live="polite"
      aria-hidden={!isVisible}
    >
      <div className="loading-transition-inner">
        <svg
          className="loading-transition-svg"
          viewBox="0 0 420 260"
          fill="none"
          aria-hidden="true"
        >
          <g className="loading-transition-plane" transform="translate(146 36) rotate(-7)">
            <path
              d="M6 35C24 24 48 18 86 17C102 17 112 20 116 26C119 31 116 36 108 38C87 43 55 42 26 38L12 49L5 47L17 36L6 35Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M52 18L38 3L48 1L73 18M57 41L40 62L51 63L82 41"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 35L1 27M7 35L2 43M91 24H93M76 24H78M61 25H63M45 27H47"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          <ellipse
            className="loading-transition-oval"
            cx="210"
            cy="139"
            rx="150"
            ry="52"
            transform="rotate(-8 210 139)"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            className="loading-transition-oval-arrow"
            d="M203 87H225M225 87L214 76M225 87L214 98"
            stroke="currentColor"
            strokeWidth="2.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="loading-transition-copy">
          <p>LOADING...</p>
          <span>PLS WAITING</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingTransition;
