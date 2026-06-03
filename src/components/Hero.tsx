import { useCallback, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import HeroCloudLayer from './HeroCloudLayer';
import HeroIntroSequence from './HeroIntroSequence';

function Hero() {
  const stampDate = getTodayStampDate();
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const frameRef = useRef<number | null>(null);
  const cloudTargetRef = useRef({ x: 0, y: 0 });

  const handleHeroMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    cloudTargetRef.current = {
      x: Math.max(-24, Math.min(24, x * 18)),
      y: Math.max(-18, Math.min(18, y * 14)),
    };

    const target = event.currentTarget;

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      target.style.setProperty('--cloud-x', `${cloudTargetRef.current.x.toFixed(2)}px`);
      target.style.setProperty('--cloud-y', `${cloudTargetRef.current.y.toFixed(2)}px`);
      frameRef.current = null;
    });
  }, []);

  const handleHeroMouseLeave = useCallback((event: MouseEvent<HTMLElement>) => {
    cloudTargetRef.current = { x: 0, y: 0 };
    event.currentTarget.style.setProperty('--cloud-x', '0px');
    event.currentTarget.style.setProperty('--cloud-y', '0px');
  }, []);

  return (
    <section
      id="hero"
      className={`hero-page flex min-h-screen items-center justify-center overflow-hidden bg-[#17291F] px-4 py-4 sm:px-6 lg:px-8 ${
        isIntroComplete ? 'hero-page-intro-complete' : ''
      }`}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      style={
        {
          '--cloud-x': '0px',
          '--cloud-y': '0px',
        } as CSSProperties
      }
    >
      <HeroCloudLayer />
      <article className="hero-ticket relative z-10 flex w-full max-w-[1120px] flex-col overflow-hidden rounded-[22px] bg-[#EFE8DD] text-[#111111] shadow-2xl shadow-black/30 md:h-[70vh] md:max-h-[78vh]">
        <div className="pointer-events-none absolute -left-4 top-[62%] hidden h-8 w-8 rounded-full bg-[#17291F] md:block" />
        <div className="pointer-events-none absolute -right-4 top-[62%] hidden h-8 w-8 rounded-full bg-[#17291F] md:block" />

        <header className="border-b border-[#111111]/10 px-5 py-4 sm:px-7 lg:px-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#111111]">
            TESIA ZHOU
          </p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#6F6A61] sm:text-[10px]">
            PERSONAL RESUME / AI PRODUCT DIRECTION
          </p>
          <p className="mt-1 text-xs leading-5 text-[#6F6A61] sm:text-[13px]">
            个人简历 / AI 产品方向
          </p>
        </header>

        <main className="grid flex-1 grid-cols-1 md:min-h-0 md:grid-cols-[1.58fr_0.82fr]">
          <section className="relative flex min-h-0 flex-col justify-center px-5 py-5 sm:px-7 lg:px-9">
            <div className="grid items-start gap-3 sm:grid-cols-[minmax(0,0.96fr)_minmax(8rem,0.56fr)_minmax(0,1.05fr)] sm:gap-4 lg:grid-cols-[minmax(0,0.96fr)_minmax(10rem,0.62fr)_minmax(0,1.08fr)]">
              <RouteBlock
                eyebrow="FROM"
                title="Fashion Product Operations Manager"
                subtitle="时尚业务运营"
              />
              <RoutePath />
              <div className="sm:pl-2 lg:pl-4">
                <RouteBlock
                  eyebrow="TO"
                  title="AI Product / Agent UX"
                  subtitle="AI 产品 / 智能体体验设计"
                />
              </div>
            </div>

            <div className="relative mt-7 max-w-[760px] lg:mt-8">
              <h1 className="font-serif text-[clamp(2.05rem,4.25vw,3.78rem)] leading-[0.98] text-[#111111]">
                Human-centered AI Product Builder
              </h1>
              <p className="mt-2 text-base leading-7 text-[#111111] sm:text-lg lg:text-xl">
                以用户为中心的 AI 产品构建者
              </p>
              <AbstractIdentityMark />
            </div>
          </section>

          <aside className="relative grid border-t border-dashed border-[#111111]/20 px-5 py-5 sm:px-7 md:min-h-0 md:border-l md:border-t-0 md:px-6 lg:px-7">
            <div className="grid content-start gap-3 pt-1 md:max-w-[58%] md:pt-3">
              <TicketDetail
                label="CLASS"
                value="Explorer"
                valueCn="探索者"
              />
              <TicketDetail
                label="STATUS"
                value="Open to Opportunities"
                valueCn="寻找 AI 产品相关机会"
              />
              <TicketDetail label="SEAT" value="User-side AI" valueCn="用户侧 AI" />
              <TicketDetail
                label="GATE"
                value="Projects / Resume"
                valueCn="项目 / 简历"
              />
            </div>

            <div className="mt-5 flex flex-col items-start gap-4 self-end sm:flex-row md:absolute md:right-6 md:top-8 md:mt-0 md:flex-col md:items-center md:gap-14 lg:right-7 lg:top-10">
              <a className="stamp-button" href="#projects">
                <span>View Projects</span>
                <span>查看项目</span>
                <span>{stampDate}</span>
              </a>
              <a className="stamp-button stamp-button-secondary" href="#resume">
                <span>View Resume</span>
                <span>查看简历</span>
                <span>{stampDate}</span>
              </a>
            </div>
            <a
              className="hero-contact-barcode"
              href="#contact"
              aria-label="Contact Info"
            >
              <span className="hero-contact-barcode-lines" aria-hidden="true" />
              <span className="hero-contact-barcode-label">
                <span>Contact Info</span>
                <span>联系方式</span>
              </span>
            </a>
          </aside>
        </main>
      </article>
      <HeroIntroSequence onComplete={() => setIsIntroComplete(true)} />
    </section>
  );
}

function getTodayStampDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function RouteBlock({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="min-w-0">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6F8A75] sm:text-[13px]">
        {eyebrow}
      </p>
      <p className="mt-1.5 text-base leading-snug text-[#111111] sm:text-lg lg:text-xl">
        {title}
      </p>
      <p className="mt-1 text-xs leading-5 text-[#6F6A61] sm:text-sm">
        {subtitle}
      </p>
    </div>
  );
}

function RoutePath() {
  return (
    <div
      className="mt-7 hidden min-w-0 items-center justify-center text-[#6F8A75] sm:flex"
      aria-hidden="true"
    >
      <svg
        className="h-10 w-full max-w-[200px] overflow-visible"
        viewBox="0 0 190 40"
        fill="none"
      >
        <path
          d="M8 25C48 7 106 8 168 21"
          stroke="#6F8A75"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="5 7"
        />
        <path
          d="M169 21L158 15M169 21L157 27"
          stroke="#6F8A75"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g transform="translate(72 -26) rotate(4)">
          <path
            d="M6 16.5H38C45 16.5 50 18.3 53 21C49 23.8 43 25 35 25H12L5 31H1L6.5 23.5H4C2.4 23.5 1.5 22.6 1.5 21.4C1.5 20.1 2.4 19.2 4 19.2H7.5L2 11.5H6L13 16.5Z"
            fill="#EFE8DD"
            stroke="#111111"
            strokeWidth="1.45"
            strokeLinejoin="round"
          />
          <path
            d="M23 16.5L16 7H20L34 16.5"
            stroke="#111111"
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 25L18 34H22L36 25"
            stroke="#6F8A75"
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 19.5H31"
            stroke="#6F8A75"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle cx="37" cy="20.6" r="0.95" fill="#111111" />
          <circle cx="33" cy="20.3" r="0.85" fill="#111111" />
          <circle cx="29" cy="20.1" r="0.75" fill="#111111" />
        </g>
      </svg>
    </div>
  );
}

function TicketDetail({
  label,
  value,
  valueCn,
}: {
  label: string;
  value: string;
  valueCn: string;
}) {
  return (
    <div className="border-b border-[#111111]/10 pb-2.5 last:border-b-0 last:pb-0">
      <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#111111]">
        {label}
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.07em] text-[#6F6A61]">
        {value}
      </p>
      <p className="mt-0.5 text-xs leading-5 text-[#111111]/72 sm:text-[13px]">
        {valueCn}
      </p>
    </div>
  );
}

function AbstractIdentityMark() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-12 right-0 hidden h-28 w-28 text-[#111111] opacity-90 sm:block lg:h-32 lg:w-32"
      viewBox="0 0 260 260"
      fill="none"
      role="img"
      aria-label="Abstract personal identity mark"
    >
      <circle
        cx="130"
        cy="130"
        r="72"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray="2 10"
      />
      <path
        d="M78 148C99 112 129 92 171 84"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M90 172C124 165 149 143 170 112"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M96 114C118 135 143 145 174 145"
        stroke="#6F8A75"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="96" cy="114" r="4.3" fill="#6F8A75" />
      <circle cx="174" cy="145" r="4.3" fill="currentColor" />
      <path
        d="M130 62V198"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.22"
      />
      <path
        d="M68 130H192"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.14"
      />
    </svg>
  );
}

export default Hero;
