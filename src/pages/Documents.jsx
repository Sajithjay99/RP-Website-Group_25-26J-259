import React, { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import "../styles/ResourceCard.css";

const DOCUMENTS = [
  {
    id: "doc-1",
    title: "Topic Assessment",
    date: "June 2025",
    description:
      "This document presents the initial topic assessment for our group research project, outlining the research objectives, scope, methodology, and expected outcomes.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/1XT2Vprp0TsDbw4Onuec_Tsqdfcl_2x0d/view",
  },
  {
    id: "doc-2",
    title: "Project Proposal-I",
    date: "September 2025",
    description:
      "Facial Emotion Detection for Mental Health Monitoring",
    author: "H.M.S.M. Jayasooriya",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/1TGAmVFxteRxGq0jOO2vseZM19bnZ3Uod/view",
  },
  {
    id: "doc-3",
    title: "Project Proposal-II",
    date: "September 2025",
    description:
      " Music Listening–based Mental Health Prediction",
    author: "R.M.L.R. Dissanayaka",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/1-tHjS5K2gblTadasjW1HWUZcWS1SBV1-/view",
  },
  {
    id: "doc-4",
    title: "Project Proposal-III",
    date: "September 2025",
    description:
      " Voice-Based Detection of Depression and Stress",
    author: "R.R.S.A. Jayasuriya",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/1DDpkKQNRDhuCZUNFGUaKbc56hXVer98g/view",
  },
  {
    id: "doc-5",
    title: "Project Proposal-IV",
    date: "September 2025",
    description:
      " EEG-based schizophrenia assessment",
    author: "W.A.O.H Wanasekara ",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/1az37m5T5S8m2jIZvLwfers3ALIJCDAwk/view",
  },


  {
    id: "doc-6",
    title: "Final Research Report",
    date: "April 2026",
    description:
      "TO DO: Final consolidated research report with complete experimental results, comparative analysis, discussion, conclusions, and future work.",
    author: "Group",
    type: "group",
    driveUrl: "",
  },
];

const FILTERS = ["All", "Group", "Individual"];

function Documents() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? DOCUMENTS
      : DOCUMENTS.filter((d) =>
        activeFilter === "Group" ? d.type === "group" : d.type === "individual"
      );

  const groupCount = DOCUMENTS.filter((d) => d.type === "group").length;
  const individualCount = DOCUMENTS.filter((d) => d.type === "individual").length;

  return (
    <section className="resource-page" id="documents-page">
      <div className="container">

        {/* ── Page Header ── */}
        <header className="resource-page-header">
          <p className="resource-page-eyebrow">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Research Documents
          </p>

          <h1 className="resource-page-title">Project Documentation</h1>

          <p className="resource-page-subtitle">
            All official reports, research papers, and individual logs submitted
            as part of our group research project — available via Google Drive.
          </p>

          {/* Stats */}
          <div className="resource-stats">
            <div className="stat-item" style={{ animationDelay: "0.3s" }}>
              <span className="stat-number">{DOCUMENTS.length}</span>
              <span className="stat-label">Total Documents</span>
            </div>
            <div className="stat-item" style={{ animationDelay: "0.45s" }}>
              <span className="stat-number">{groupCount}</span>
              <span className="stat-label">Group Reports</span>
            </div>
            <div className="stat-item" style={{ animationDelay: "0.6s" }}>
              <span className="stat-number">{individualCount}</span>
              <span className="stat-label">Individual Reports</span>
            </div>
          </div>

          <div className="header-divider" />
        </header>

        {/* ── Filter Pills ── */}
        <div className="filter-bar" role="group" aria-label="Filter documents">
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
          Showing <strong>{filtered.length}</strong> of {DOCUMENTS.length} documents
        </p>

        {/* ── Cards Grid ── */}
        {filtered.length > 0 ? (
          <div className="resource-grid">
            {filtered.map((doc, i) => (
              <ResourceCard
                key={doc.id}
                index={i}
                title={doc.title}
                date={doc.date}
                description={doc.description}
                author={doc.author}
                type={doc.type}
                driveUrl={doc.driveUrl}
                fileType="pdf"
              />
            ))}
          </div>
        ) : (
          <div className="resource-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <p>No documents found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Documents;
