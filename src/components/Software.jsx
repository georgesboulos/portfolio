const software = [
  { name: "Adobe Illustrator", short: "Ai" },
  { name: "Adobe Photoshop", short: "Ps" },
  { name: "Adobe After Effects", short: "Ae" },
  { name: "Adobe InDesign", short: "Id" },
  { name: "Figma", short: "Fg" },
];

const Software = () => {
  return (
    <section className="software" id="software">
      <div className="container">
        <div className="software__heading">
          <span className="section-label">02. Software Proficiency</span>
          <h2 className="section-title">
            Software <em>Proficiency</em>
          </h2>
        </div>

        <div className="software__panel">
          <div className="software__grid">
            {software.map((item) => (
              <div className="software__item" key={item.name}>
                <span className="software__mark" aria-hidden="true">
                  {item.short}
                </span>
                <span className="software__name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
