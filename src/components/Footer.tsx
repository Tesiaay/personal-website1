const wechatQrUrl = `${import.meta.env.BASE_URL}wechat-qr.png`;

const contacts = [
  {
    label: 'WeChat',
    labelCn: '寰俊',
    href: wechatQrUrl,
    target: '_blank',
    icon: 'wechat',
    detail: 'qr',
  },
  {
    label: 'Email',
    labelCn: '閭',
    href: 'mailto:tesiazzy@163.com',
    icon: 'email',
    detail: 'tesiazzy@163.com',
  },
  {
    label: 'Phone',
    labelCn: '鐢佃瘽',
    href: 'tel:19825092820',
    icon: 'phone',
    detail: '19825092820',
  },
  {
    label: 'GitHub',
    labelCn: 'GitHub',
    href: '#',
    icon: 'github',
    detail: 'Coming soon',
    ariaLabel: 'GitHub coming soon',
  },
];

function Footer() {
  return (
    <section
      id="contact"
      className="contact-page relative min-h-screen overflow-hidden bg-[#17291F] px-4 py-14 text-[#EFE8DD] sm:px-6 md:h-screen md:min-h-0 md:py-8 lg:px-8"
    >
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-[1120px] gap-10 md:h-full md:min-h-0 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-14">
        <aside className="max-w-xl">
          <div className="contact-return-nav">
            <a href="#projects" className="contact-return-link">
              <span>鈫?Project Index</span>
              <span>杩斿洖鐩綍</span>
            </a>
            <a href="#hero" className="contact-return-link">
              <span>鈫?Hero Section</span>
              <span>杩斿洖棣栭〉</span>
            </a>
          </div>

          <div className="mt-9 md:mt-11">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#6F8A75]">
              CONTACT
            </p>
            <h2 className="mt-3 font-serif text-[clamp(3rem,7vw,6.3rem)] leading-none text-[#EFE8DD] md:text-[clamp(4rem,6vw,6.2rem)]">
              Contact
            </h2>
            <p className="mt-4 text-xl leading-8 text-[#EFE8DD]/82 md:text-2xl">
              鑱旂郴鏂瑰紡
            </p>
          </div>

          <div className="mt-8 space-y-4 border-l border-[#EFE8DD]/14 pl-5 text-sm leading-7 text-[#EFE8DD]/68 md:mt-7">
            <p>Keep in touch.</p>
            <p className="text-[#EFE8DD]/48">鏈熷緟涓庝綘淇濇寔鑱旂郴銆?</p>
          </div>
        </aside>

        <div className="contact-panel">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#6F8A75]">
            Contact Signals
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.target}
                rel={contact.target ? 'noopener noreferrer' : undefined}
                aria-label={contact.ariaLabel ?? contact.label}
                className="contact-icon-link group"
              >
                <ContactIcon type={contact.icon} />
                <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                  {contact.label}
                </span>
                <span className="mt-1 text-sm text-[#EFE8DD]/48">
                  {contact.labelCn}
                </span>

                <span className="contact-tooltip">
                  {contact.detail === 'qr' ? (
                    <img
                      src={wechatQrUrl}
                      alt="WeChat QR code"
                      className="h-44 w-44 object-contain"
                    />
                  ) : (
                    contact.detail
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="contact-watermark">CONTACT</p>
      <p className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[10px] uppercase tracking-[0.45em] text-[#EFE8DD]/10 md:block">
        TESIA ZHOU
      </p>
    </section>
  );
}

function ContactIcon({ type }: { type: string }) {
  if (type === 'wechat') {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M20.5 15C12.5 15 6.5 19.8 6.5 26C6.5 29.4 8.4 32.4 11.4 34.4L10.2 39L15.2 36.7C16.8 37.2 18.5 37.5 20.5 37.5C28.5 37.5 34.5 32.7 34.5 26.5C34.5 19.9 28.5 15 20.5 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M29 10.5C36.2 11.5 41.5 16 41.5 21.7C41.5 24.8 39.9 27.6 37.3 29.6L38.3 33.5L34.1 31.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="25" r="1.4" fill="currentColor" />
        <circle cx="25" cy="25" r="1.4" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'email') {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect
          x="8"
          y="13"
          width="32"
          height="23"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 15L24 26L38 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M18 9L23 18L19 21C21.5 26.5 25.5 30.5 31 33L34 29L43 34C41.8 39.5 38.5 42 34 42C20.5 42 6 27.5 6 14C6 9.5 8.5 6.2 14 5L18 9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 7C14.6 7 7 14.6 7 24C7 31.5 11.8 37.8 18.5 40C19.3 40.1 19.6 39.7 19.6 39.2V34.8C15 35.8 14 32.8 14 32.8C13.2 30.8 12.1 30.3 12.1 30.3C10.6 29.3 12.2 29.3 12.2 29.3C13.9 29.4 14.8 31.1 14.8 31.1C16.3 33.6 18.7 32.9 19.7 32.5C19.8 31.4 20.3 30.7 20.8 30.2C17.1 29.8 13.2 28.4 13.2 21.9C13.2 20.1 13.9 18.6 14.9 17.4C14.7 17 14.1 15.3 15.1 13C15.1 13 16.5 12.6 19.6 14.7C20.9 14.3 22.4 14.1 23.9 14.1C25.4 14.1 26.9 14.3 28.2 14.7C31.3 12.6 32.7 13 32.7 13C33.7 15.3 33.1 17 32.9 17.4C33.9 18.6 34.6 20.1 34.6 21.9C34.6 28.4 30.7 29.8 27 30.2C27.6 30.7 28.1 31.7 28.1 33.2V39.2C28.1 39.7 28.4 40.1 29.2 40C35.9 37.8 40.7 31.5 40.7 24C41 14.6 33.4 7 24 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Footer;
