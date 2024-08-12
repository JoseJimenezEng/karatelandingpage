import './App.css'
import infoImg from "../public/images/infoImg.jpg"
import { Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10 } from '../public/images/images.js';

function App() {

  return (
    <div className="main">

      <div className="banner">
        <div className="content">
          <h1>KARATE SMR CLUB</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="button">
            <button>INSCRIBIRSE</button>
          </div>

        </div>
      </div>
      <div className="mainContent">

        <div className="infoTitle">
          <h2>Sobre nosotros</h2>
        </div>
        <div className="about">
          <div className="img">
            <img src={infoImg} alt="" />
          </div>
          <div className="contentTxt">
            <h2>El Karate-do</h2>
            <p>
              El karate-do es un sistema de defensa personal sin armas, que sin embargo, presenta grandes diferencias con otros deportes de contacto como el boxeo Chino o el MMA que sólo buscan la victoria sobre el contrincante.
              Por esta circunstancia, este arte fue transmitido de la isla de Okinawa a todo Japón a través de sus diferentes universidades que consideraron esta disciplina ideal para complementar la formación de sus estudiantes.
              Actualmente es considerado además uno de los deportes más completos, por el empleo de todos los grupos musculares y el acondicionamiento cardio-muscular.

            </p>
          </div>

        </div>
        <div className="news">
          <div className="content">
            <div className="title"><h3>Misión</h3></div>
            <div className="text"><p>
              La Liga de Karate-Do del Magdalena tiene como misión formar ciudadanos a través del deporte, con un alto sentido de los valores, que se proyectan socialmente de manera integral siendo ejemplo de convivencia.
            </p></div>
          </div>
          <div className="content">
            <div className="title"><h3>Visión</h3></div>
            <div className="text"><p>
              La liga de Karate-do del Magdalena se proyecta a la comunidad departamental, que forma individuos de manera integral teniendo en cuenta sus dimensiones social, moral, intelectual, espiritual y deportiva.
            </p></div>
          </div>
          <div className="content">
            <div className="title"><h3>Finalidad</h3></div>
            <div className="text"><p>
              Que los niños, niñas, jóvenes y adultos  practiquen actividad física y utilización del tiempo libre, mediante este deporte estilo de vida karate-do evitando el sedentarismo y generando espacios de sano esparcimiento. Formar en valores y normas.
            </p></div>
          </div>
        </div>

      </div>
      <div className="galleryContent">

        <div className="infoTitle">
          <h2>Galería</h2>
        </div>
        <div className="gallery">
        <h3>La liga</h3>
          <div className="liga">
            
            <div className="left">
              <img src={Image1} alt="" /><img src={Image2} alt="" /><img src={Image3} alt="" /><img src={Image4} alt="" />
            </div>
            <div className="right">
              <img src={Image5} alt="" />
            </div>
          </div>
          <div className="button">
            <button>INSCRIBIRSE</button>
          </div>
          <h3>Karate Kids</h3>
          <div className="kids">
            
            <div className="left">
              <img src={Image6} alt="" /><img src={Image7} alt="" /><img src={Image8} alt="" /><img src={Image9} alt="" />
            </div>
            <div className="right">
              <img src={Image10} alt="" />
            </div>
          </div>
          <div className="button">
            <button>INSCRIBIRSE</button>
          </div>
        </div>

      </div>

    </div>

  )
}

export default App
