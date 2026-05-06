import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  const categories = [
    "all",
    "branding",
    "packaging",
    "typography",
    "logos",
    "illustrations",
    "printing",
    "photography",
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <span className="section-label">02. Projects</span>
        <h2 className="section-title">
          Selected <em>Work</em>
        </h2>

        <div className="filter-bar">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              className="project-card"
              to={`/project/${project.slug}`}
            >
              <div
                className="project-card__img"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-card__overlay">
                  <span className="project-card__view">Open Project</span>
                </div>
              </div>

              <div className="project-card__info">
                <span className="project-card__cat">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
