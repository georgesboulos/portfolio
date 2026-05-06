import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Cursor from "./Cursor";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <main className="project-page">
        <div className="container">
          <p>Project not found.</p>
          <Link to="/" className="btn btn--ghost">
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  const projectImages = project.images || [project.image];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <Cursor />

      <main className="project-page">
        <div className="container">
          <Link to="/" className="btn btn--ghost project-page__back">
            Back
          </Link>

          <div className="project-page__hero">
            <div className="project-page__image-wrap">
              <img
                src={projectImages[currentImage]}
                alt={project.title}
                className="project-page__image"
              />

              {projectImages.length > 1 && (
                <>
                  <button
                    className="carousel-btn carousel-btn--prev"
                    onClick={prevImage}
                  >
                    ←
                  </button>

                  <button
                    className="carousel-btn carousel-btn--next"
                    onClick={nextImage}
                  >
                    →
                  </button>

                  <div className="carousel-dots">
                    {projectImages.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${
                          currentImage === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentImage(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="project-page__content">
              <span className="section-label">{project.category}</span>
              <h1 className="section-title">{project.title}</h1>
              <p className="project-page__description">{project.description}</p>

              <ul className="project-page__list">
                {project.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
