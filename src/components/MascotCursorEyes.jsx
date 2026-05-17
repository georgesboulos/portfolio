const MascotCursorEyes = () => {
  return (
    <a className="mascot" href="#contact" aria-label="Go to contact">
      <span className="mascot__bubble">
        <svg
          className="mascot__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.87a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
        </svg>
        <span className="mascot__text">Contact Me!</span>
      </span>
    </a>
  );
};

export default MascotCursorEyes;
