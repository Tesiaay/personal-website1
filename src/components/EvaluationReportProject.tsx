import { useEffect, useMemo, useRef, useState } from 'react';

const evaluationCards = [
  {
    index: '01',
    title: 'INTENT ROUTING',
    titleCn: '意图识别',
    problem: '混合输入容易分错模块',
    action: '补充分类规则与示例',
    result: '先识别真实需求，再进入对应模块',
  },
  {
    index: '02',
    title: 'MEMORY JUDGE',
    titleCn: '记忆判断',
    problem: '临时信息与长期偏好混杂',
    action: '设计 SAVE / NO_MEMORY 规则',
    result: '只保留长期有价值的信息',
  },
  {
    index: '03',
    title: 'RESPONSE STABILITY',
    titleCn: '输出稳定性',
    problem: '回答过长，重点不清',
    action: '调整 Prompt 输出结构',
    result: '结论更靠前，输出更简洁',
  },
];

const evaluationCardFields = ['index', 'title', 'titleCn', 'problem', 'action', 'result'] as const;
const evaluationTypingSpeed = 24;
const evaluationFieldPause = 90;
const evaluationCardPause = 220;

type EvaluationCardField = (typeof evaluationCardFields)[number];
type TypedEvaluationCard = Record<EvaluationCardField, string>;

function createEmptyEvaluationCards(): TypedEvaluationCard[] {
  return evaluationCards.map(() => ({
    index: '',
    title: '',
    titleCn: '',
    problem: '',
    action: '',
    result: '',
  }));
}

function TypedEvaluationText({ text, fullText }: { text: string; fullText: string }) {
  return (
    <span className="evaluation-report-typed" aria-label={fullText}>
      <span className="evaluation-report-typed-ghost" aria-hidden="true">
        {fullText}
      </span>
      <span className="evaluation-report-typed-live" aria-hidden="true">
        {text}
      </span>
    </span>
  );
}

function EvaluationReportProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const [typewriterRun, setTypewriterRun] = useState(0);
  const wasInViewRef = useRef(false);
  const [typedCards, setTypedCards] = useState<TypedEvaluationCard[]>(() => createEmptyEvaluationCards());
  const typewriterSequence = useMemo(
    () =>
      evaluationCards.flatMap((card, cardIndex) =>
        evaluationCardFields.map((field) => ({
          cardIndex,
          field,
          text: card[field],
        })),
      ),
    [],
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInViewRef.current) {
          wasInViewRef.current = true;
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

    const timers: number[] = [];
    setTypedCards(createEmptyEvaluationCards());

    const typeField = (sequenceIndex: number) => {
      const item = typewriterSequence[sequenceIndex];

      if (!item) {
        return;
      }

      let charIndex = 0;

      const tick = () => {
        charIndex += 1;
        setTypedCards((currentCards) =>
          currentCards.map((cardFields, cardIndex) => {
            if (cardIndex !== item.cardIndex) {
              return cardFields;
            }

            return {
              ...cardFields,
              [item.field]: item.text.slice(0, charIndex),
            };
          }),
        );

        if (charIndex < item.text.length) {
          timers.push(window.setTimeout(tick, evaluationTypingSpeed));
          return;
        }

        const nextItem = typewriterSequence[sequenceIndex + 1];
        const delay =
          nextItem && nextItem.cardIndex !== item.cardIndex ? evaluationCardPause : evaluationFieldPause;

        timers.push(window.setTimeout(() => typeField(sequenceIndex + 1), delay));
      };

      tick();
    };

    timers.push(window.setTimeout(() => typeField(0), 220));

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [typewriterRun, typewriterSequence]);

  return (
    <section ref={sectionRef} id="project-ai-evaluation" className="evaluation-report-page">
      <div className="evaluation-report-shell">
        <nav className="evaluation-report-nav" aria-label="AI evaluation report navigation">
          <a href="#projects">
            <span>← Project Index</span>
            <span>返回目录</span>
          </a>
          <a href="#hero">
            <span>← Hero Section</span>
            <span>返回首页</span>
          </a>
        </nav>

        <header className="evaluation-report-header">
                    <h2 key={`evaluation-title-${typewriterRun}`}>
            <span>TIVA</span>{' '}
            <span>EVALUATION</span>{' '}
            <span>REPORT</span>
          </h2>
          <p>评测流程</p>
        </header>

        <div className="evaluation-report-watermark" aria-hidden="true">
          EVALUATION
        </div>
        <div className="evaluation-report-band" aria-hidden="true" />

        <div className="evaluation-report-cards" aria-label="Tiva evaluation focus areas">
          {evaluationCards.map((card, cardIndex) => {
            const typedCard = typedCards[cardIndex];

            return (
              <article className="evaluation-report-card" key={card.index}>
                <div className="evaluation-report-card-heading" key={`card-heading-${typewriterRun}-${card.index}`}>
                  <span>
                    <TypedEvaluationText text={typedCard.index} fullText={card.index} />
                  </span>
                  <div>
                    <h3>
                      <TypedEvaluationText text={typedCard.title} fullText={card.title} />
                    </h3>
                    <p>
                      <TypedEvaluationText text={typedCard.titleCn} fullText={card.titleCn} />
                    </p>
                  </div>
                </div>

                <dl key={`card-body-${typewriterRun}-${card.index}`}>
                  <div>
                    <dt>
                      <TypedEvaluationText text={typedCard.problem ? 'Problem:' : ''} fullText="Problem:" />
                    </dt>
                    <dd>
                      <TypedEvaluationText text={typedCard.problem} fullText={card.problem} />
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TypedEvaluationText text={typedCard.action ? 'Action:' : ''} fullText="Action:" />
                    </dt>
                    <dd>
                      <TypedEvaluationText text={typedCard.action} fullText={card.action} />
                    </dd>
                  </div>
                  <div>
                    <dt>
                      <TypedEvaluationText text={typedCard.result ? 'Result:' : ''} fullText="Result:" />
                    </dt>
                    <dd>
                      <TypedEvaluationText text={typedCard.result} fullText={card.result} />
                    </dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>

        <a className="evaluation-report-back" href="#project-tiva">
          BACK TO TIVA PROJECT →
        </a>
      </div>
    </section>
  );
}

export default EvaluationReportProject;