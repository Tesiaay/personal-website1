import { useEffect, useRef, useState } from 'react';

type CapabilityNode = {
  label: string;
  labelCn?: string;
  className: string;
};

type ScrambledNode = {
  label: string;
  labelCn: string;
  revealed: boolean;
  active: boolean;
};

const capabilityNodes: CapabilityNode[] = [
  {
    label: 'Information Translation',
    labelCn: '信息转译',
    className: 'about-reference-node-translation',
  },
  {
    label: 'Workflow Clarity',
    labelCn: '流程梳理',
    className: 'about-reference-node-workflow',
  },
  {
    label: 'User Understanding',
    labelCn: '用户理解',
    className: 'about-reference-node-user',
  },
  {
    label: 'Cross-functional Coordination',
    labelCn: '跨部门协同',
    className: 'about-reference-node-coordination',
  },
  {
    label: 'Prompt Architecture',
    className: 'about-reference-node-prompt',
  },
  {
    label: 'Agent Workflow',
    className: 'about-reference-node-agent',
  },
];

const scrambleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%&+-';

function createEmptyNodes() {
  return capabilityNodes.map(() => ({
    label: '',
    labelCn: '',
    revealed: false,
    active: false,
  }));
}

function scrambleText(text: string, progress: number) {
  if (!text) {
    return '';
  }

  const resolvedLength = Math.floor(text.length * progress);

  return text
    .split('')
    .map((character, index) => {
      if (character === ' ') {
        return ' ';
      }

      if (index < resolvedLength) {
        return character;
      }

      return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
    })
    .join('');
}

function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const timersRef = useRef<number[]>([]);
  const wasVisibleRef = useRef(false);
  const [animationRun, setAnimationRun] = useState(0);
  const [displayNodes, setDisplayNodes] = useState<ScrambledNode[]>(() => createEmptyNodes());

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisibleRef.current) {
          wasVisibleRef.current = true;
          setAnimationRun((run) => run + 1);
        }

        if (!entry.isIntersecting) {
          wasVisibleRef.current = false;
        }
      },
      {
        threshold: 0.58,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animationRun === 0) {
      return;
    }

    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
    setDisplayNodes(createEmptyNodes());

    const animateNode = (nodeIndex: number) => {
      if (nodeIndex >= capabilityNodes.length) {
        return;
      }

      const node = capabilityNodes[nodeIndex];
      let tick = 0;
      const totalTicks = 12;

      const runTick = () => {
        tick += 1;
        const progress = Math.min(1, tick / totalTicks);

        setDisplayNodes((currentNodes) =>
          currentNodes.map((currentNode, index) => {
            if (index < nodeIndex) {
              return {
                label: capabilityNodes[index].label,
                labelCn: capabilityNodes[index].labelCn ?? '',
                revealed: true,
                active: false,
              };
            }

            if (index === nodeIndex) {
              return {
                label: progress === 1 ? node.label : scrambleText(node.label, progress),
                labelCn:
                  progress === 1
                    ? node.labelCn ?? ''
                    : scrambleText(node.labelCn ?? '', progress),
                revealed: progress === 1,
                active: progress < 1,
              };
            }

            return currentNode;
          }),
        );

        if (tick < totalTicks) {
          timersRef.current.push(window.setTimeout(runTick, 46));
          return;
        }

        timersRef.current.push(window.setTimeout(() => animateNode(nodeIndex + 1), 180));
      };

      runTick();
    };

    timersRef.current.push(window.setTimeout(() => animateNode(0), 720));

    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };
  }, [animationRun]);

  return (
    <section id="about" className="about-reference-page" ref={sectionRef}>
      <div className="about-reference-frame">
        <nav className="about-reference-nav tiva-poster-nav" aria-label="About me navigation">
          <a href="#projects" className="about-reference-return-link tiva-poster-return-link">
            <span>{'\u2190 Project Index'}</span>
            <span>{'\u8fd4\u56de\u76ee\u5f55'}</span>
          </a>
          <a href="#hero" className="about-reference-return-link tiva-poster-return-link">
            <span>{'\u2190 Hero Section'}</span>
            <span>{'\u8fd4\u56de\u9996\u9875'}</span>
          </a>
        </nav>

        <h2 className="about-reference-title" aria-label="About me" key={animationRun}>
          <span className="about-title-layer about-title-main">
            <span>ABOUT</span>
            <span>ME</span>
          </span>
          <span className="about-title-layer about-title-slice about-title-slice-top" aria-hidden="true">
            <span>ABOUT</span>
            <span>ME</span>
          </span>
          <span className="about-title-layer about-title-slice about-title-slice-mid" aria-hidden="true">
            <span>ABOUT</span>
            <span>ME</span>
          </span>
          <span className="about-title-layer about-title-slice about-title-slice-low" aria-hidden="true">
            <span>ABOUT</span>
            <span>ME</span>
          </span>
        </h2>

        <svg
          className="about-reference-timeline"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="about-reference-line about-reference-line-main"
            d="M930 86 C812 104 770 146 774 222 C780 318 640 376 512 414 C380 453 250 458 118 514"
          />
          <path
            className="about-reference-line about-reference-line-to"
            d="M560 480 C710 526 836 528 922 500"
          />
          <path className="about-reference-arrow" d="M922 500 L902 493 L907 512 Z" />
        </svg>

        <div className="about-reference-endpoint about-reference-from">
          <span className="about-reference-endpoint-dot" aria-hidden="true" />
          <div>
            <p>FROM</p>
            <p>Fashion Product</p>
            <p>时尚业务</p>
          </div>
        </div>

        <div className="about-reference-endpoint about-reference-to">
          <span className="about-reference-endpoint-dot" aria-hidden="true" />
          <div>
            <p>TO</p>
            <p>AI Product</p>
            <p>AI 产品</p>
          </div>
        </div>

        <ol className="about-reference-nodes" aria-label="Transferable capabilities">
          {capabilityNodes.map((item, index) => {
            const displayNode = displayNodes[index];

            return (
              <li
                className={`about-reference-node ${item.className} ${
                  displayNode.revealed ? 'about-reference-node-revealed' : ''
                } ${displayNode.active ? 'about-reference-node-active' : ''}`}
                key={item.label}
              >
                <span className="about-reference-node-dot" aria-hidden="true" />
                <span className="about-reference-node-copy">
                  <span>
                    {index + 1}. {displayNode.label}
                  </span>
                  {item.labelCn ? <span>{displayNode.labelCn}</span> : null}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default About;
