import { useMemo, useState } from 'react';

const maxUnits = 30;

function Support() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(false);

  const count = useMemo(() => getMessageUnits(message), [message]);

  const handleChange = (value: string) => {
    const next = limitMessage(value);
    setMessage(next);
    setStatus('');
    setSent(false);
  };

  const handleSend = () => {
    if (!message.trim()) {
      setStatus('Please write one sentence first. / 请先写一句话。');
      setSent(false);
      return;
    }

    setStatus('Received. Thank you for leaving a note. / 已收到，谢谢你的留言。');
    setMessage('');
    setSent(true);
  };

  return (
    <section
      id="support"
      className="support-page relative min-h-screen overflow-hidden text-[#111111] md:h-screen md:min-h-0"
    >
      <div className="support-band" aria-hidden="true" />

      <div className="support-layout">
        <aside className="support-nav">
          <div className="flex flex-col items-start gap-8">
            <a href="#projects" className="support-return-link">
              <span>← Project Index</span>
              <span>返回目录</span>
            </a>
            <a href="#hero" className="support-return-link">
              <span>← Hero Section</span>
              <span>返回首页</span>
            </a>
          </div>
        </aside>

        <div className="support-station">
          <div className="support-paper">
            <div className="support-board-heading">
              <div>
                <p>LEAVE ME A NOTE</p>
                <span>{count} / {maxUnits}</span>
              </div>
            </div>

            <textarea
              value={message}
              onChange={(event) => handleChange(event.target.value)}
              placeholder="Write one sentence... / 写一句建议..."
              className="support-input"
              rows={5}
            />

            <div className="support-board-actions">
              <button className="paper-plane-button" type="button" onClick={handleSend}>
                <span>Send me a wish</span>
              </button>

              <p
                className={`support-status ${
                  sent ? 'text-[#6F8A75]' : 'text-[#6F6A61]'
                }`}
                aria-live="polite"
              >
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="support-watermark" aria-hidden="true">
        SUPPORT
      </p>
    </section>
  );
}

function getMessageUnits(value: string) {
  return Array.from(value).reduce((total, char) => {
    return total + (char.charCodeAt(0) > 255 ? 1 : 0.5);
  }, 0);
}

function limitMessage(value: string) {
  let total = 0;
  let output = '';

  for (const char of Array.from(value)) {
    const next = char.charCodeAt(0) > 255 ? 1 : 0.5;

    if (total + next > maxUnits) {
      break;
    }

    total += next;
    output += char;
  }

  return output;
}

export default Support;
