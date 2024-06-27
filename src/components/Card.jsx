import React from "react";
import "./components.css";
import { FaCheck } from "react-icons/fa";

export default function Card() {
  const obtendras = [
    "Programa AMG completo",
    "Plataforma Gamificada con Premios",
    "6 meses de coaching con Agus y 20+ expertos",
    "Comunidad VIP",
    "Scripts para Cerrar tu primer Cliente",
    "​Regalo #1: Checklist Nichos Rentables",
    "Regalo #2: Un viaje a Dubai",
    "Regalo #3: Secretos de Agus para facturar $400k dólares al mes",
  ];

  // Dividir el array en dos partes
  const halfLength = Math.ceil(obtendras.length / 2);
  const column1 = obtendras.slice(0, halfLength);
  const column2 = obtendras.slice(halfLength, obtendras.length);

  return (
    <div className="card">
      <div className="column">
        <ul className="custom-list">
          {column1.map((item, index) => (
            <li key={index}>
              <FaCheck color="#FA6501" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <ul className="custom-list">
          {column2.map((item, index) => (
            <li key={index}>
              <FaCheck color="#FA6501" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
