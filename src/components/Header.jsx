import React from "react";
import "./components.css";

export default function Header() {
  return (
    <div className="header">
      <div className="propuesta">
      <div className="textAntes">Ayudamos a desarrolladores Jr y Sr, diseñadores UX/UI y analistas de datos</div>
      <div className="textPropuesta">
        Garantizamos empleo en 60 días con aumentos salariales del 30% al 50% o
        más
      </div>
      <div className="textAntes">También asistimos a desarrolladores Jr en su inserción al sector IT</div>
      </div>
      <iframe
        width="1000"
        height="550"
        src="https://www.youtube.com/embed/6vMfCYTxFT0?si=ldf_YuLv5UjfZdXH"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
