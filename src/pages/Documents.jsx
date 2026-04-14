import React, { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import "../styles/ResourceCard.css";

/**
 * Research PDF documents — each entry maps to a Google Drive PDF link.
 * Replace the `driveUrl` values with real links once available.
 */
const DOCUMENTS = [
  {
    id: "doc-1",
    title: "Project Proposal",
    date: "August 2024",
    description:
      "Initial project proposal outlining the research objectives, scope, methodology, and expected outcomes for the group research project.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_1/view",
  },
  {
    id: "doc-2",
    title: "Progress Report – Phase 1",
    date: "October 2024",
    description:
      "First progress report covering literature review findings, initial data collection, and preliminary model architecture decisions.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_2/view",
  },
  {
    id: "doc-3",
    title: "Individual Research Log – Sajith",
    date: "November 2024",
    description:
      "Individual contribution log documenting personal research tasks, experiments conducted, and observations during Phase 1.",
    author: "Sajith Jayawardena",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_3/view",
  },
  {
    id: "doc-4",
    title: "Mid-Year Progress Report",
    date: "January 2025",
    description:
      "Comprehensive mid-year status report covering system architecture, model evaluation metrics, challenges encountered, and planned next steps.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_4/view",
  },
  {
    id: "doc-5",
    title: "Research Paper Draft – v1",
    date: "February 2025",
    description:
      "First complete draft of the research paper including abstract, introduction, methodology, preliminary results, and references.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_5/view",
  },
  {
    id: "doc-6",
    title: "Individual Research Log – Member 2",
    date: "March 2025",
    description:
      "Personal research log for the second team member covering data preprocessing pipelines, feature engineering experiments, and model tuning.",
    author: "Member 2",
    type: "individual",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_6/view",
  },
  {
    id: "doc-7",
    title: "Final Research Report",
    date: "April 2025",
    description:
      "Final consolidated research report with complete experimental results, comparative analysis, discussion, conclusions, and future work.",
    author: "Group",
    type: "group",
    driveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_7/view",
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

  return (
    <section className="resource-page" id="documents-page">
      <div className="container">
        {/* Page header */}
        <header className="resource-page-header">
          <p className="resource-page-eyebrow">
            {/* Document stack icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Research Documents
          </p>
          <h1 className="resource-page-title">Project Documentation</h1>
          <p className="resource-page-subtitle">
            All official reports, research papers, and individual logs submitted
            as part of our group research project. Available to view or download
            via Google Drive.
          </p>
        </header>

        {/* Filter pills */}
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

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div className="resource-grid">
            {filtered.map((doc) => (
              <ResourceCard
                key={doc.id}
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
            <p>No documents found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Documents;
