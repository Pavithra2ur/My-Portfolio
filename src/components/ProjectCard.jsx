// ProjectCard.jsx
import React, { useState } from "react";
import style from "./ProjectCard.module.css";  // <— capture as styles

const ProjectCard = ({ title, shortDesc, fullDesc, demoLink,image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className={style.projectCard}> {/* use styles.projectCard */}
        {image && (
          <div className={style["project-image-wrapper"]}>
            <img src={image} alt={title} className={style["project-image"]} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{shortDesc}</p>
        <button onClick={() => setShowModal(true)} className={style.viewMore}>
          View More
        </button>
      </div>

      {showModal && (
        <div className={style.modal} onClick={() => setShowModal(false)}>
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={style.close} onClick={() => setShowModal(false)}>
              &times;
            </span>
            {image && (
              <img src={image} alt={title} className={style["modal-image"]} />
            )}
            <h2>{title}</h2>
            <p>{fullDesc}</p>

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={style.demoButton}
              >
                🔗 View Demo
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
