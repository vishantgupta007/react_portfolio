import React from "react";
import resume from "../../assets/resume25.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} className="btn" download>
        DOWNLOAD CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
