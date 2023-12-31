export default function HomeSection() {
  return (
    <section id="home__section" className="home__section">
      <div className="home__section__sub__heading">Hello, I am</div>
      <div className="home__section__heading">Chiranjit Behera</div>
      <div className="home__section__slogan">
        Let's Build You A <span>Digital Identity</span>
      </div>
      <div className="home__section__info">
        I'm a Web Developer based in India. Proficient in web
        development. I enjoy turning complex problems into simple, beautiful and
        intuitive solutions. Recently graduated from
        <span>Masai School</span>
      </div>
      <button
        className="home__section__button"
        title="Check out my work!"
        onClick={() => {
          document.getElementById("work__section").scrollIntoView();
          // document.getElementById("work").checked = true;
        }}
      >
        Check out my work!
      </button>
    </section>
  );
}
