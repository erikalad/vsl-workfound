import React, { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpia el script cuando el componente se desmonta
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="calendly"
      data-url="https://calendly.com/worksfound/demo"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
}
