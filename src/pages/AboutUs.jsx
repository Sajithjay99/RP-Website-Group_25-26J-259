import React from "react";

function AboutUs() {
  const getImagePath = (path) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
  };

  const supervisors = [
    {
      name: "Ms. Lochana Rajamanthri",
      role: "Supervisor",
      institute: "Sri Lanka Institute of Information Technology",
      faculty: "SLIIT Business School",
      email: "lochana.r@sliit.lk",
      image: "images/supervisors/lochana.jpg",
    },
    {
      name: "Ms. Sasini Hathurusinghe",
      role: "Co-Supervisor",
      institute: "Sri Lanka Institute of Information Technology",
      faculty: "Department of Information Technology",
      position: "Assistant Lecturer",
      email: "sasini.h@sliit.lk",
      image: "images/supervisors/sasini.jpg",
    },
  ];

  const members = [
    {
      name: "Jayasooriya H.M.S.M.",
      role: "Group Leader",
      institute: "Sri Lanka Institute of Information Technology",
      dept: "Information Technology",
      email: "Sajithjay99@gmail.com",
      linkedin: "https://www.linkedin.com/in/sajithjay99/",
      image: "images/members/leader.jpg",
    },
    {
      name: "Dissanayaka R.M.L.R.",
      role: "Group Member",
      institute: "Sri Lanka Institute of Information Technology",
      dept: "Information Technology",
      email: "lasitharavimal7@gmail.com",
      linkedin: "https://www.linkedin.com/in/lasitha-ravimal-6890b8213/",
      image: "images/members/member1.jpg",
    },
    {
      name: "Jayasuriya R.R.S.A.",
      role: "Group Member",
      institute: "Sri Lanka Institute of Information Technology",
      dept: "Information Technology",
      email: "akashsasanka480@gmail.com",
      linkedin: "https://www.linkedin.com/in/sasanka-akash-08b44b339/",
      image: "images/members/member2.jpg",
    },
    {
      name: "Wanasekara W.A.O.H.",
      role: "Group Member",
      institute: "Sri Lanka Institute of Information Technology",
      dept: "Information Technology",
      email: "oshanhavishkaw@gmail.com",
      linkedin: "https://www.linkedin.com/in/oshan-wanasekara-530496309/",
      image: "images/members/member3.jpg",
    },
  ];

  const Card = ({ person, isStudent }) => (
    <div
      style={{
        background: "var(--color-card-bg)",
        border: "1px solid var(--color-border-light)",
        borderRadius: "12px",
        overflow: "hidden",
        textAlign: "left",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={getImagePath(person.image)}
        alt={person.name}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          objectPosition: "top center",
          background: "#111",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            marginBottom: "8px",
            color: "var(--color-text-primary)",
          }}
        >
          {person.name}
        </h3>

        <span
          style={{
            background: isStudent ? "var(--color-primary-green)" : "#4a5568",
            color: "white",
            padding: "3px 10px",
            borderRadius: "4px",
            fontSize: "0.8rem",
            fontWeight: "bold",
            display: "inline-block",
            marginBottom: "15px",
          }}
        >
          {person.role}
        </span>

        <div
          style={{
            fontSize: "0.9rem",
            color: "var(--color-text-secondary)",
            lineHeight: "1.6",
          }}
        >
          {isStudent && <p style={{ fontWeight: "600" }}>Undergraduate</p>}
          <p>{person.faculty || person.institute}</p>

          <p
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              color: "var(--color-text-primary)",
            }}
          >
            {isStudent ? "Department" : "Position"}
          </p>

          <p>{isStudent ? person.dept : person.position || "Lecturer"}</p>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "15px",
            borderTop: "1px solid var(--color-border-light)",
            paddingTop: "12px",
          }}
        >
          <a
            href={`mailto:${person.email}`}
            style={{
              color: "var(--color-primary-green)",
              fontSize: "0.85rem",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            📧 E-Mail
          </a>

          {isStudent && person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0077b5",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              🔗 LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="page-section">
      <div className="container">
        <p
          style={{
            color: "var(--color-primary-green)",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          ABOUT US
        </p>

        <h1 style={{ fontSize: "2.5rem", marginBottom: "50px" }}>
          Meet Our Team !
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          {supervisors.map((person) => (
            <div key={person.name} style={{ width: "400px" }}>
              <Card person={person} isStudent={false} />
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {members.map((person) => (
            <Card key={person.name} person={person} isStudent={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;