import { useState } from "react";

const ENL231 = () => {
  const [activeProject, setActiveProject] = useState(null);

  const sections = [
    {
      title: "Workplace Observation / Job Shadowing",
      type: "documents",
      files: [
        {
          title: "Job Shadowing",
          path: "/projects/enl231/Job Shadowing.docx",
          kind: "DOCX",
        },
        {
          title: "Workplace Observation",
          path: "/projects/enl231/workplace observation.pdf",
          kind: "PDF",
        },
      ],
    },
    {
      title: "Video Resume",
      type: "video",
      content: "/projects/enl231/Georges Boulos Video CV.mp4",
    },
    {
      title: "Communication Comic Strip",
      type: "gallery",
      images: [
        {
          title: "Good Communication",
          path: "/projects/enl231/georges good com.jpeg",
        },
        {
          title: "Bad Communication",
          path: "/projects/enl231/georges bad com.jpeg",
        },
      ],
    },
    {
      title: "Big 5 Personality Test",
      type: "image",
      content: "/projects/enl231/big5.jpg",
    },
    {
      title: "Learning Style Graphic",
      type: "image",
      content: "/projects/enl231/learning style graphic.jpg",
    },
    {
      title: "Tree",
      type: "image",
      content: "/projects/enl231/tree.jpeg",
    },
    {
      title: "Professional Email",
      type: "image",
      content: "/projects/enl231/email.jpeg",
    },
    {
      title: "Emotional Intelligence Project",
      type: "documents",
      files: [
        {
          title: "Emotional Intelligence",
          path: "/projects/enl231/Emotional Intelligence.pptx",
          kind: "PPTX",
        },
      ],
    },
    {
      title: "My Professional Development Plan",
      type: "documents",
      files: [
        {
          title: "Goals",
          path: "/projects/enl231/goals.pdf",
          kind: "PDF",
        },
      ],
    },
  ];

  const getSectionLabel = (section) => {
    if (section.type === "documents") {
      return section.files.length > 1 ? "Documents" : section.files[0].kind;
    }

    if (section.type === "gallery") {
      return "Gallery";
    }

    return section.type;
  };

  return (
    <main className="enl231" id="enl231">
      <div className="container">
        <div className="enl231__hero">
          <p className="section-label">ENL 231</p>
          <h1 className="section-title">Professional Philosophy</h1>
          <p className="enl231__intro">
            I believe design is a form of communication where clarity, emotion,
            and purpose must work together to create meaningful impact. My
            approach is rooted in balancing creativity with precision,
            transforming ideas into visual solutions that are both functional
            and engaging. Influenced by my background in music, I approach
            design with a strong sense of rhythm, structure, and harmony,
            allowing me to build compositions that feel intentional and dynamic.
            I value adaptability, collaboration, and continuous learning, and I
            aim to create work that not only solves problems but leaves a
            lasting impression through thoughtful visual storytelling.
          </p>
          <h1 className="section-title">Course Reflection</h1>
          <p className="enl231__intro">
            The Work Ready (ENL 231) course has helped me develop a stronger
            understanding of professional communication and workplace readiness
            beyond the creative field. Through the course, I improved essential
            skills such as formal writing, email communication, teamwork,
            interview preparation, and professional self-presentation. It gave
            me practical insight into workplace expectations and helped me
            reflect on my personal strengths, communication style, and career
            goals. As a graphic designer, this course strengthened my confidence
            in presenting myself professionally and prepared me to transition
            more effectively from academic life into the professional
            environment.
          </p>
        </div>

        <div className="enl231__grid">
          {sections.map((section, index) => (
            <div
              className={`enl231__card enl231__card--${section.type} enl231__card--tone-${
                (index % 4) + 1
              }`}
              key={index}
            >
              <span className="enl231__card-kicker">
                {getSectionLabel(section)}
              </span>
              <h3>{section.title}</h3>

              <button
                className="enl231__view"
                onClick={() => setActiveProject(section)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="enl231__modal-overlay"
          onClick={() => setActiveProject(null)}
        >
          <div
            className={`enl231__modal ${
              activeProject.type === "gallery" ? "enl231__modal--wide" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="enl231__close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <h2>{activeProject.title}</h2>

            {activeProject.type === "image" ? (
              <img
                src={encodeURI(activeProject.content)}
                alt={activeProject.title}
                className="enl231__modal-image"
              />
            ) : activeProject.type === "video" ? (
              <video
                src={encodeURI(activeProject.content)}
                className="enl231__modal-image"
                controls
              />
            ) : activeProject.type === "gallery" ? (
              <div className="enl231__gallery">
                {activeProject.images.map((image) => (
                  <figure className="enl231__gallery-item" key={image.path}>
                    <img
                      src={encodeURI(image.path)}
                      alt={image.title}
                      className="enl231__modal-image"
                    />
                    <figcaption>{image.title}</figcaption>
                  </figure>
                ))}
              </div>
            ) : activeProject.type === "documents" ? (
              <div className="enl231__documents">
                {activeProject.files.map((file) => (
                  <a
                    className="enl231__document"
                    href={encodeURI(file.path)}
                    key={file.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <strong>{file.title}</strong>
                      <small>{file.kind}</small>
                    </span>
                    <span className="enl231__document-action">Open</span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="enl231__modal-text">{activeProject.content}</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ENL231;
