import { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight-app-lazy", "");

    document.body.appendChild(script);
  }, []);

  return (
 <>
    <div className="elfsight-app-63f409c1-347d-48a4-832a-b806e78a8a3d" data-elfsight-app-lazy></div>
    </>
  );
};

export default WhatsAppWidget;
