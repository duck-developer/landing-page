export default function Skills() {
  const skills = [
    { label: "AI/ML", icon: "🤖" },
    { label: "Backend (Node/Python)", icon: "🧱" },
    { label: "Cloud (AWS/GCP)", icon: "☁️" },
    { label: "Databases (Postgres/Redis)", icon: "🗄️" },
    { label: "Messaging (Kafka)", icon: "📡" },
    { label: "DevOps (Docker/K8s)", icon: "🛠️" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Tech Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.label}
              className="card p-5 flex items-center gap-4 text-base-color"
            >
              <div className="text-2xl">{s.icon}</div>
              <div className="font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
