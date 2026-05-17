import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(null);
  const projectImages = project?.images || (project?.image ? [project.image] : []);
  const projectDetails = project?.details || [];
  const imageCount = projectImages.length;
  const isViewerOpen = activeImage !== null;

  const showNextImage = () => {
    setActiveImage((current) =>
      current === imageCount - 1 ? 0 : current + 1,
    );
  };

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? imageCount - 1 : current - 1,
    );
  };

  useEffect(() => {
    if (!isViewerOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === imageCount - 1 ? 0 : current + 1,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === 0 ? imageCount - 1 : current - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imageCount, isViewerOpen]);

  if (!project) {
    return (
      <main className="project-page">
        <div className="container">
          <p>Project not found.</p>
          <Link
            to="/portfolio"
            state={{ scrollTo: "projects" }}
            className="btn btn--ghost"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-page">
      <div className="container">
        <Link
          to="/portfolio"
          state={{ scrollTo: "projects" }}
          className="btn btn--ghost project-page__back"
        >
          Back
        </Link>

        <div className="project-page__hero">
          <div className="project-page__content">
            <span className="section-label">{project.category}</span>
            <h1 className="section-title">{project.title}</h1>
            {project.description && (
              <p className="project-page__description">
                {project.description}
              </p>
            )}

            {projectDetails.length > 0 && (
              <div className="project-page__list">
                {projectDetails.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        {projectImages.length > 0 && (
          <div className="project-page__gallery">
            {projectImages.map((image, index) => (
              <figure
                className={`project-page__image-wrap ${
                  index === 0 ? "project-page__image-wrap--featured" : ""
                }`}
                key={image}
              >
                <button
                  className="project-page__image-button"
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View ${project.title} image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="project-page__image"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </button>
                <figcaption className="project-page__image-caption">
                  {index === 0 ? "Cover" : `Image ${index + 1}`}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>

      {isViewerOpen && (
        <div
          className="project-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image viewer`}
        >
          <button
            className="project-viewer__backdrop"
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close image viewer"
          />

          <div className="project-viewer__panel">
            <button
              className="project-viewer__close"
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image viewer"
            >
              ×
            </button>

            {projectImages.length > 1 && (
              <button
                className="project-viewer__nav project-viewer__nav--prev"
                type="button"
                onClick={showPreviousImage}
                aria-label="Previous image"
              >
                ←
              </button>
            )}

            <img
              src={projectImages[activeImage]}
              alt={`${project.title} large view ${activeImage + 1}`}
              className="project-viewer__image"
              decoding="async"
            />

            {projectImages.length > 1 && (
              <button
                className="project-viewer__nav project-viewer__nav--next"
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
              >
                →
              </button>
            )}

            <p className="project-viewer__count">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(projectImages.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectPage;
