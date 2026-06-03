const heroCloudUrl = `${import.meta.env.BASE_URL}intro/cloud-bg.png`;

function HeroCloudLayer() {
  return (
    <div className="hero-cloud-scene" aria-hidden="true">
      <img
        className="hero-cloud-image hero-cloud-layer-back"
        src={heroCloudUrl}
        alt=""
        draggable={false}
      />
      <img
        className="hero-cloud-image hero-cloud-layer-mid"
        src={heroCloudUrl}
        alt=""
        draggable={false}
      />
      <img
        className="hero-cloud-image hero-cloud-layer-front"
        src={heroCloudUrl}
        alt=""
        draggable={false}
      />
    </div>
  );
}

export default HeroCloudLayer;
