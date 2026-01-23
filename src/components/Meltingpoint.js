// export default function MeltingPoint() {
//   return (
//     <section className="project-section">
//       <div className="container">
//         <h1 className="project-heading">
//           Melting<span className="purple">Point</span>
//         </h1>

//         <p style={{ color: "white" }}>
//           Demo zur Schmelzpunktvorhersage organischer Verbindungen.
//         </p>
//       </div>
//     </section>
//   );
// }


export default function MeltingPoint() {
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
          <iframe
            src="/Meltingpoint.pdf"
            width="100%"
            height="600"
            title="Melting Point Präsentation"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </section>
  );
}

