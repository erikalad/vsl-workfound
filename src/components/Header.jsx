import React, { useEffect, useRef, useState } from "react";
import "./components.css";

export default function Header() {
  const [videoHeight, setVideoHeight] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const calculateHeight = () => {
      // Asumiendo un ancho base del contenedor
      const containerWidth = videoRef.current.parentElement.offsetWidth;
      // Ajusta la relación de aspecto según tus necesidades
      const aspectRatio = 9 / 16; // Ejemplo: 16:9 aspect ratio
      const calculatedHeight = Math.floor(containerWidth * aspectRatio);
      setVideoHeight(calculatedHeight);
    };

    calculateHeight();

    // Vuelve a calcular la altura cuando cambie el tamaño de la ventana
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="header">
      <div className="propuesta">
        <div className="textAntes">Ayudamos a desarrolladores Jr y Sr, diseñadores UX/UI y analistas de datos</div>
        <div className="textPropuesta">
          Garantizamos empleo en 60 días con aumentos salariales del 30% al 50% o más
        </div>
        <div className="textAntes">También asistimos a desarrolladores Jr en su inserción al sector IT</div>
      </div>
      <iframe
        width="100%"
        height={videoHeight}
        src="https://www.youtube.com/embed/6vMfCYTxFT0?si=ldf_YuLv5UjfZdXH"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ref={videoRef}
      ></iframe>
    </div>
  );
}
