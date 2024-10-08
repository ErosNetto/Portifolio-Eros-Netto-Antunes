import "./AboutMe.css";

const AboutMe = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <h2 className="about-title">Sobre Mim</h2>
      <div className="about-content">
        <div className="about-image">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Seu Nome"
            className="about-photo"
          />
        </div>
        <div className="about-text">
          <p>
            Sou um desenvolvedor full stack com paixão por criar aplicações web
            robustas e escaláveis. Com experiência em diversas tecnologias
            modernas, estou sempre em busca de novos desafios e oportunidades
            para aprender e crescer.
          </p>
          <p>
            Quando não estou codando, gosto de [seus hobbies ou interesses].
            Acredito que um bom equilíbrio entre trabalho e vida pessoal é
            essencial para manter a criatividade e produtividade.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
