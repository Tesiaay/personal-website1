import { useEffect, useRef, useState } from 'react';

const tivaChatflowDemoUrl = `${import.meta.env.BASE_URL}tiva-chatflow-demo.png`;

const capabilities = [
  {
    en: 'Intent Routing',
    cn: '\u610f\u56fe\u5206\u6d41',
    summary: '\u8bc6\u522b\u771f\u5b9e\u9700\u6c42',
    detail: '\u5206\u6790\u8f93\u5165\u5185\u5bb9\uff0c\u5224\u65ad\u7528\u6237\u771f\u6b63\u60f3\u89e3\u51b3\u7684\u95ee\u9898',
    className: 'tiva-poster-module-intent',
  },
  {
    en: 'Module Response',
    cn: '\u6a21\u5757\u5316\u56de\u7b54',
    summary: '\u8fdb\u5165\u5bf9\u5e94\u6a21\u5757',
    detail: '\u6839\u636e\u9700\u6c42\u8fdb\u5165 Task / Knowledge / Decision / Reflection \u6a21\u5757',
    className: 'tiva-poster-module-response',
  },
  {
    en: 'Memory Judge',
    cn: '\u8bb0\u5fc6\u5224\u65ad',
    summary: '\u5224\u65ad\u662f\u5426\u9700\u8981\u8bb0\u5fc6',
    detail: '\u8bc6\u522b\u957f\u671f\u504f\u597d\u4e0e\u91cd\u8981\u4fe1\u606f\uff0c\u51b3\u5b9a\u662f\u5426\u5199\u5165\u8bb0\u5fc6',
    className: 'tiva-poster-module-memory',
  },
];

function createEmptyTypedFields() {
  return capabilities.map(() => ['', '', '', ''] as string[]);
}

function createCompleteTypedFields() {
  return capabilities.map((capability) => [
    capability.en,
    capability.cn,
    capability.summary,
    capability.detail,
  ]);
}

function TivaProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [typewriterRun, setTypewriterRun] = useState(0);
  const wasInViewRef = useRef(false);
  const [typedFields, setTypedFields] = useState<string[][]>(() => createEmptyTypedFields());

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInViewRef.current) {
          wasInViewRef.current = true;
          setHasEnteredView(true);
          setTypewriterRun((currentRun) => currentRun + 1);
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

  useEffect(() => {
    if (typewriterRun === 0) {
      return;
    }

    setTypedFields(createCompleteTypedFields());
  }, [typewriterRun]);

  return (
    <section
      ref={sectionRef}
      id="project-tiva"
      className={`tiva-page tiva-poster-page min-h-screen px-4 py-10 sm:px-6 md:h-screen md:min-h-0 md:overflow-hidden md:py-6 lg:px-8 ${
        hasEnteredView ? 'tiva-poster-page-visible' : ''
      }`}
    >
      <div className="tiva-poster-frame" aria-label="Tiva Personal AI Assistant">
        <nav className="tiva-poster-nav" aria-label="Tiva project navigation">
          <a href="#projects" className="tiva-poster-return-link">
            <span>{'\u2190 Project Index'}</span>
            <span>{'\u8fd4\u56de\u76ee\u5f55'}</span>
          </a>
          <a href="#hero" className="tiva-poster-return-link">
            <span>{'\u2190 Hero Section'}</span>
            <span>{'\u8fd4\u56de\u9996\u9875'}</span>
          </a>
        </nav>

        <div className="tiva-poster-band" aria-hidden="true" />

        <div className="tiva-poster-modules" aria-label="Tiva core capabilities">
          {capabilities.map((capability, index) => (
            <div
              className={`tiva-poster-module ${capability.className}`}
              key={capability.en}
              tabIndex={0}
            >
              <div className="tiva-poster-module-header">
                <span className="tiva-poster-module-number">{index + 1}</span>
                <div className="tiva-poster-module-heading" key={`heading-${typewriterRun}-${index}`}>
                  <span>{typedFields[index][0]}</span>
                  <span>{typedFields[index][1]}</span>
                </div>
              </div>
              <span className="tiva-poster-module-rule" aria-hidden="true" />
              <div className="tiva-poster-module-body" key={`body-${typewriterRun}-${index}`}>
                <span>{typedFields[index][2]}</span>
                <span>{typedFields[index][3]}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="tiva-poster-title" key={`title-${typewriterRun}`}>
          <span>TIVA</span>
          <span>Personal AI Assistant</span>
        </h2>

        <div className="tiva-poster-links">
          <button
            className="tiva-poster-text-link tiva-poster-workflow-link"
            type="button"
            onClick={() => setIsWorkflowModalOpen(true)}
          >
            OPEN TIVA WORKFLOW SCREENSHOT {'\u2192'}
          </button>
          <a className="tiva-poster-text-link tiva-poster-evaluation-link" href="#project-ai-evaluation">
            VIEW TIVA EVALUATION REPORT {'\u2192'}
          </a>
        </div>
      </div>

      {isWorkflowModalOpen ? (
        <div
          className="tiva-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tiva-workflow-modal-title"
        >
          <button
            className="tiva-modal-backdrop"
            type="button"
            aria-label="Close workflow screenshot modal"
            onClick={() => setIsWorkflowModalOpen(false)}
          />
          <div className="tiva-modal-panel">
            <div className="tiva-modal-header">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#6F8A75]">
                  Actual Workflow Demo / {'\u771f\u5b9e\u5de5\u4f5c\u6d41\u6f14\u793a'}
                </p>
                <h4 id="tiva-workflow-modal-title">
                  Actual Tiva Chatflow Screenshot
                  <span>Tiva {'\u5b9e\u9645\u5de5\u4f5c\u6d41\u622a\u56fe'}</span>
                </h4>
              </div>
              <button
                className="tiva-modal-close"
                type="button"
                onClick={() => setIsWorkflowModalOpen(false)}
              >
                Close
                <span>{'\u5173\u95ed'}</span>
              </button>
            </div>

            <div className="tiva-modal-body">
              <figure className="tiva-modal-shot">
                <img src={tivaChatflowDemoUrl} alt="Actual Tiva Chatflow Screenshot" />
                <figcaption>
                  <span>Full Dify Chatflow Structure / Dify {'\u5b8c\u6574\u5de5\u4f5c\u6d41\u7ed3\u6784'}</span>
                  <a href={tivaChatflowDemoUrl} target="_blank" rel="noopener noreferrer">
                    Open Full Image / {'\u67e5\u770b\u5927\u56fe'}
                  </a>
                </figcaption>
              </figure>
              <aside className="tiva-modal-info">
                <p>
                  This is the actual Tiva workflow I built in Dify. It handles
                  intent routing, answer aggregation, and memory judgment.
                </p>
                <p>
                  {'\u8fd9\u662f\u6211\u5728 Dify \u4e2d\u5b9e\u9645\u642d\u5efa\u7684 Tiva \u5de5\u4f5c\u6d41\uff0c\u7528\u4e8e\u5b8c\u6210\u610f\u56fe\u8def\u7531\u3001\u56de\u7b54\u805a\u5408\u548c\u8bb0\u5fc6\u5224\u65ad\u3002'}
                </p>
                <div className="tiva-modal-tags">
                  <span>Intent Routing / {'\u610f\u56fe\u8def\u7531'}</span>
                  <span>Answer Aggregation / {'\u56de\u7b54\u805a\u5408'}</span>
                  <span>Memory Judge / {'\u8bb0\u5fc6\u5224\u65ad'}</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default TivaProject;
