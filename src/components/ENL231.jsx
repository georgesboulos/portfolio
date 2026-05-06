import { useState } from "react";

const ENL231 = () => {
  const [activeProject, setActiveProject] = useState(null);

  const sections = [
    {
      title: "Professional Philosophy / Mission Statement",
      type: "text",
      content:
        "Paste your full professional philosophy, mission statement, and course reflection here.",
    },
    {
      title: "Workplace Observation / Job Shadowing",
      type: "text",
      content:
        "Paste your Brandmint job shadowing reflection and workplace observation here.",
    },
    {
      title: "Video Resume",
      type: "image",
      content: "/projects/enl231/video-resume.png",
    },
    {
      title: "Communication Comic Strip",
      type: "image",
      content: "/projects/enl231/comic-strip.png",
    },
    {
      title: "Big 5 Personality Test",
      type: "image",
      content: "/projects/enl231/big-5-test.png",
    },
    {
      title: "Learning Style Graphic",
      type: "image",
      content: "/projects/enl231/learning-style.png",
    },
  ];

  return (
    <main className="enl231" id="enl231">
      <div className="container">
        <div className="enl231__hero">
          <p className="section-label">ENL 231</p>
          <h1 className="section-title">Course Reflection</h1>
          <p className="enl231__intro">
            This page documents my semester journey in ENL231, highlighting the
            major projects and reflections that contributed to my professional
            development, communication skills, and workplace readiness.
          </p>
        </div>

        <div className="enl231__grid">
          {sections.map((section, index) => (
            <div className="enl231__card" key={index}>
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
          <div className="enl231__modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="enl231__close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <h2>{activeProject.title}</h2>

            {activeProject.type === "image" ? (
              <img
                src={activeProject.content}
                alt={activeProject.title}
                className="enl231__modal-image"
              />
            ) : activeProject.type === "video" ? (
              <video
                src={activeProject.content}
                alt={activeProject.title}
                className="enl231__modal-image"
              />
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
