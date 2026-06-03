import { useState } from 'react';

const testimonialSources = [
  {
    number: '01',
    source: 'Brand-side Partner / 品牌方合作伙伴',
    tag: 'Problem Solving / 突发问题处理',
    cn: '“和她合作很安心。她足够专业，也能在突发状况里快速找到解决办法。”',
    en: '"Working with her feels reliable. She is professional and can quickly find solutions when unexpected issues arise."',
    className: 'testimonial-source-brand',
  },
  {
    number: '02',
    source: 'Factory-side Partner / 工厂方合作伙伴',
    tag: 'Execution Clarity / 执行清晰度',
    cn: '“她做事很到位，沟通清楚，也知道怎么把事情推进下去。”',
    en: '"She handles things thoroughly, communicates clearly, and knows how to move work forward."',
    className: 'testimonial-source-factory',
  },
  {
    number: '03',
    source: 'Former Boss / 前任老板',
    tag: 'Ownership / 责任感',
    cn: '“她很有责任心，交给她的事情会认真跟到底。”',
    en: '"She has a strong sense of responsibility and follows things through with care."',
    className: 'testimonial-source-boss',
  },
  {
    number: '04',
    source: 'Former Leader / 前任领导',
    tag: 'Execution Drive / 推进力',
    cn: '“她有感染力，也有执行力，能让事情真正动起来。”',
    en: '"She brings energy and execution, helping ideas turn into real progress."',
    className: 'testimonial-source-leader',
  },
  {
    number: '05',
    source: 'Former Colleague / 前任同事',
    tag: 'Adaptability / 适应能力',
    cn: '“她适应能力很强，面对新环境和新任务，上手很快。”',
    en: '"She adapts quickly to new environments and picks up new tasks fast."',
    className: 'testimonial-source-colleague',
  },
  {
    number: '06',
    source: 'Friends / 朋友',
    tag: 'Learning Agility / 学习悟性',
    cn: '“她沟通能力很强，学习东西有悟性，能很快抓住重点。”',
    en: '"She communicates well, learns with strong intuition, and quickly grasps the key points."',
    className: 'testimonial-source-friends',
  },
];

function Testimonials() {
  const [activeSource, setActiveSource] = useState<(typeof testimonialSources)[number] | null>(null);

  return (
    <section id="testimonials" className="testimonial-reference-page">
      <div className="testimonial-reference-frame">
        <nav className="testimonial-reference-nav" aria-label="Testimonials navigation">
          <a href="#projects" className="testimonial-reference-return-link">
            <span>← Project Index</span>
            <span>返回目录</span>
          </a>
          <a href="#hero" className="testimonial-reference-return-link">
            <span>← Hero Section</span>
            <span>返回首页</span>
          </a>
        </nav>

        <div className="testimonial-reference-band" aria-hidden="true" />
        <h2 className="testimonial-reference-title">TESTIMONIALS</h2>

        <div className="testimonial-reference-sources" aria-label="Testimonial sources">
          {testimonialSources.map((item) => (
            <button
              className={`testimonial-reference-source ${item.className}`}
              key={item.number}
              type="button"
              onClick={() => setActiveSource(item)}
            >
              : {item.source}
            </button>
          ))}
        </div>

        {activeSource ? (
          <div
            className="testimonial-reference-overlay"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setActiveSource(null);
              }
            }}
          >
            <dialog className="testimonial-message-modal" open key={activeSource.number}>
              <button
                className="testimonial-message-close"
                type="button"
                onClick={() => setActiveSource(null)}
                aria-label="Close testimonial message"
              >
                ×
              </button>
              <div className="testimonial-message-lines">
                <p className="testimonial-message-line testimonial-message-line-1">
                  {activeSource.number}
                </p>
                <p className="testimonial-message-line testimonial-message-line-2">
                  {activeSource.tag}
                </p>
                <p className="testimonial-message-line testimonial-message-line-3">
                  {activeSource.cn}
                </p>
                <p className="testimonial-message-line testimonial-message-line-4">
                  {activeSource.en}
                </p>
                <p className="testimonial-message-line testimonial-message-line-5">
                  From: {activeSource.source}
                </p>
              </div>
              <button
                className="testimonial-message-done"
                type="button"
                onClick={() => setActiveSource(null)}
              >
                Close
              </button>
            </dialog>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Testimonials;
