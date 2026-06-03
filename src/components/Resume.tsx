const resumeHref = '/resume.pdf';

function Resume() {
  return (
    <section
      id="resume"
      className="resume-page relative min-h-screen overflow-hidden text-[#EFE8DD] md:h-screen md:min-h-0"
    >
      <div className="resume-archive-title" aria-hidden="true">
        <div className="resume-archive-title-layer resume-archive-title-dark">
          <span className="resume-title-word resume-title-word-resume">RESUME</span>
          <span className="resume-title-word resume-title-word-archive">ARCHIVE</span>
        </div>
        <div className="resume-archive-title-layer resume-archive-title-light">
          <span className="resume-title-word resume-title-word-resume">RESUME</span>
          <span className="resume-title-word resume-title-word-archive">ARCHIVE</span>
        </div>
      </div>

      <div className="resume-layout">
        <aside className="resume-nav">
          <div className="flex flex-col items-start gap-8">
            <a href="#projects" className="resume-return-link">
              <span>← Project Index</span>
              <span>返回目录</span>
            </a>
            <a href="#hero" className="resume-return-link">
              <span>← Hero Section</span>
              <span>返回首页</span>
            </a>
          </div>
        </aside>

        <div className="resume-display">
          <article className="resume-file-card">
            <p className="resume-card-label">PDF</p>

            <div className="resume-card-name">
              <span>TESIA</span>
              <span>ZHOU</span>
            </div>

            <div className="resume-card-divider" />

            <div className="resume-card-role">
              <p>
                PERSONAL RESUME
              </p>
              <p>
                AI PRODUCT DIRECTION
              </p>
            </div>

            <div className="resume-card-divider" />

            <dl className="resume-card-meta">
              <div>
                <dt>NAME/姓名</dt>
                <dd>Tesia Zhou/周姊亿</dd>
              </div>
              <div>
                <dt>DIRECTION/方向</dt>
                <dd>AI Product/AI 产品</dd>
              </div>
            </dl>
          </article>

          <div className="resume-action-stack">
            <a
              className="resume-action resume-action-primary"
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Resume</span>
              <span>查看简历</span>
            </a>
            <a
              className="resume-action"
              href={resumeHref}
              download="Tesia-Zhou-Resume.pdf"
            >
              <span>Download PDF</span>
              <span>下载简历</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
