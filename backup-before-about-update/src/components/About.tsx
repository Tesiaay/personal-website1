const bubbleItems = [
  {
    label: 'Information Translation',
    labelCn: '信息转译',
    className: 'about-reference-dot-translation',
  },
  {
    label: 'Workflow Clarity',
    labelCn: '流程梳理',
    className: 'about-reference-dot-workflow',
  },
  {
    label: 'User Understanding',
    labelCn: '用户理解',
    className: 'about-reference-dot-user',
  },
  {
    label: 'Cross-functional Coordination',
    labelCn: '跨部门协同',
    className: 'about-reference-dot-coordination',
  },
  {
    label: 'Prompt Architecture',
    labelCn: '',
    className: 'about-reference-dot-prompt',
  },
  {
    label: 'Agent Workflow',
    labelCn: '',
    className: 'about-reference-dot-agent',
  },
];

function About() {
  return (
    <section id="about" className="about-reference-page">
      <div className="about-reference-frame">
        <nav className="about-reference-nav" aria-label="About me navigation">
          <a href="#projects" className="about-reference-return-link">
            <span>← Project Index</span>
            <span>返回目录</span>
          </a>
          <a href="#hero" className="about-reference-return-link">
            <span>← Hero Section</span>
            <span>返回首页</span>
          </a>
        </nav>

        <h2 className="about-reference-title" aria-label="About me">
          <span>ABOUT</span>
          <span>ME</span>
        </h2>

        <div className="about-reference-from">
          <p>FROM</p>
          <p>Fashion Product</p>
          <p>时尚业务</p>
        </div>

        <div className="about-reference-dash" aria-hidden="true" />

        <div className="about-reference-to">
          <p>TO</p>
          <p>AI Product</p>
          <p>AI 产品</p>
        </div>

        <div className="about-reference-dots" aria-label="Transferable capabilities">
          {bubbleItems.map((item) => (
            <button
              className={`about-reference-dot ${item.className}`}
              key={item.label}
              type="button"
              aria-label={`${item.label}${item.labelCn ? ` / ${item.labelCn}` : ''}`}
            >
              <span className="about-reference-bubble">
                <span>{item.label}</span>
                {item.labelCn ? <span>{item.labelCn}</span> : null}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
