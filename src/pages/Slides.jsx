import React, { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import "../styles/ResourceCard.css";

const SLIDES = [
  {
    id: "slide-1",
    title: "Proposal Presentation",
    date: "September 2025",
    description:
      "Initial presentation introducing the research topic, problem statement, proposed solution, and team roles to supervisors and stakeholders.",
    author: "Group",
    type: "group",
    driveUrl: "https://docs.google.com/presentation/d/1IIPa2txKDyRTZdFPXlOk8rS2Q4nI2kEm/edit?usp=drive_link&ouid=111138872678092402720&rtpof=true&sd=true",
  },
  {
    id: "slide-2",
    title: "Progress Presentation-I",
    date: "Januarty 2026",
    description:
      "Project update presentation reporting over 50% implementation progress for the multi-modal mental health detection system.",
    author: "Group",
    type: "group",
    driveUrl: "https://docs.google.com/presentation/d/1XZUuQAXDLVNPs3W2EISCzRAazhSNA-9-/edit?usp=drive_link&ouid=111138872678092402720&rtpof=true&sd=true",
  },
  {
    id: "slide-3",
    title: "Progress Presentation-II",
    date: "March 2026",
    description:
      "Project update presentation reporting over 90% implementation progress for the multi-modal mental health detection system.",
    author: "Group",
    type: "group",
    driveUrl: "https://docs.google.com/presentation/d/1ou-MjWAvDvTqYGvO4UwYON3oaKUxMOWN/edit?usp=drive_link&ouid=111138872678092402720&rtpof=true&sd=true",
  },

  {
    id: "slide-4",
    title: "Final Presentation",
    date: "April 2026",
    description:
      "TO DO:Final project presentation slides summarising the complete research journey, results, contributions, conclusions, and recommendations for future work.",
    author: "Group",
    type: "group",
    driveUrl: "",
  },
];

const FILTERS = ["All", "Group", "Individual"];

function Slides() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? SLIDES
      : SLIDES.filter((s) =>
        activeFilter === "Group" ? s.type === "group" : s.type === "individual"
      );

  const groupCount = SLIDES.filter((s) => s.type === "group").length;
  const individualCount = SLIDES.filter((s) => s.type === "individual").length;

  return (
    <section className="resource-page" id="slides-page">
      <div className="container">

        {/* ── Page Header ── */}
        <header className="resource-page-header">
          <p className="resource-page-eyebrow">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            Presentation Slides
          </p>

          <h1 className="resource-page-title">Past Presentations</h1>

          <p className="resource-page-subtitle">
            Slide decks from all group and individual presentations conducted
            throughout the research project. Click <em>View Slides</em> to open
            on Google Drive.
          </p>

          <div className="header-divider" />
        </header>

        {/* ── Filter Pills ── */}
        <div className="filter-bar" role="group" aria-label="Filter slides">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-pill ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="results-label">
          Showing <strong>{filtered.length}</strong> of {SLIDES.length} presentations
        </p>

        {/* ── Cards Grid ── */}
        {filtered.length > 0 ? (
          <div className="resource-grid">
            {filtered.map((slide, i) => (
              <ResourceCard
                key={slide.id}
                index={i}
                title={slide.title}
                date={slide.date}
                description={slide.description}
                author={slide.author}
                type={slide.type}
                driveUrl={slide.driveUrl}
                fileType="pptx"
              />
            ))}
          </div>
        ) : (
          <div className="resource-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <p>No slides found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Slides;
