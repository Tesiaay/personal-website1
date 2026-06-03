function HeroCloudLayer() {
  return (
    <div className="hero-cloud-scene" aria-hidden="true">
      <img
        className="hero-cloud-image hero-cloud-layer-back"
        src="/intro/cloud-bg.png"
        alt=""
        draggable={false}
      />
      <img
        className="hero-cloud-image hero-cloud-layer-mid"
        src="/intro/cloud-bg.png"
        alt=""
        draggable={false}
      />
      <img
        className="hero-cloud-image hero-cloud-layer-front"
        src="/intro/cloud-bg.png"
        alt=""
        draggable={false}
      />
    </div>
  );
}

export default HeroCloudLayer;
