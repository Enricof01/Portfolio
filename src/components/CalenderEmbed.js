export default function CalenderEmbed() {



return (
    <section className="project-section">
      <div className="container">
        <h1 className="project-heading">
          Melting<span className="purple">Point</span>
        </h1>

        <p style={{ color: "white", marginBottom: 20 }}>
          Präsentation zum Projekt Schmelzpunktvorhersage.
        </p>

        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
<div style={{ width: "100%", height: "80vh" }}>
      <iframe
        src="https://calendarmodule.vercel.app"
        title="Kalender"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: 12,
        }}
      />
    </div>
        </div>
      </div>
    </section>
  );
}