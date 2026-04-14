import React, { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import "../styles/ResourceCard.css";

/**
 * Presentation slides — each entry maps to a Google Drive PPTX / Slides link.
 * Replace the `driveUrl` values with real links once available.
 */
const SLIDES = [
  {
    id: "slide-1",
    title: "Project Kick-off Presentation",
    date: "August 2024",
    description:
      "Initial presentation introducing the research topic, problem statement, proposed solution, and team roles to supervisors and stakeholders.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_SLIDE_ID_1/view",
  },
  {
    id: "slide-2",
    title: "Literature Review Presentation",
    date: "September 2024",
    description:
      "Slides covering a thorough review of existing research, related work, and identified research gaps in the domain.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_SLIDE_ID_2/view",
  },
  {
    id: "slide-3",
    title: "Progress Review – Phase 1",
    date: "November 2024",
    description:
      "Phase 1 progress review presentation detailing data collection, preprocessing steps, and initial model prototypes demonstrated to the supervisory panel.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_SLIDE_ID_3/view",
  },
  {
    id: "slide-4",
    title: "Individual Presentation – Sajith",
    date: "December 2024",
    description:
      "Individual viva presentation highlighting personal research contributions, methodology choices, and preliminary findings.",
    author: "Sajith Jayawardena",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/YOUR_SLIDE_ID_4/view",
  },
  {
    id: "slide-5",
    title: "Mid-Year Review Presentation",
    date: "January 2025",
    description:
      "Mid-year review slides covering system architecture overview, model benchmarking results, and updated project timeline presented to the review board.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_SLIDE_ID_5/view",
  },
  {
    id: "slide-6",
    title: "Individual Presentation – Member 2",
    date: "February 2025",
    description:
      "Personal viva presentation for the second team member covering experimental design, data augmentation techniques, and evaluation strategies.",
    author: "Member 2",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/YOUR_SLIDE_ID_6/view",
  },
  {
    id: "slide-7",
    title: "Final Defense Presentation",
    date: "April 2025",
    description:
      "Final project defense slides summarising the complete research journey, results, contributions, conclusions, and recommendations for future work.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_SLIDE_ID_7/view",
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

  return (
    <section className="resource-page" id="slides-page">
      <div className="container">
        {/* Page header */}
        <header className="resource-page-header">
          <p className="resource-page-eyebrow">
            {/* Presentation icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            Presentation Slides
          </p>
          <h1 className="resource-page-title">Past Presentations</h1>
          <p className="resource-page-subtitle">
            Slide decks from all group and individual presentations conducted
            throughout the research project. Click <em>View Slides</em> to open
            them on Google Drive.
          </p>
        </header>

        {/* Filter pills */}
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

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div className="resource-grid">
            {filtered.map((slide) => (
              <ResourceCard
                key={slide.id}
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
            <p>No slides found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Slides;
