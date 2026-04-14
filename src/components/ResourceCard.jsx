import React from "react";
import "../styles/ResourceCard.css";

/**
 * ResourceCard — shared card for Documents & Slides pages
 *
 * Props:
 *  title       {string}  – document / slide title
 *  date        {string}  – e.g. "March 2025"
 *  description {string}  – short summary
 *  author      {string}  – group name or individual author
 *  type        {string}  – "group" | "individual"  (controls badge colour)
 *  driveUrl    {string}  – Google Drive link
 *  fileType    {string}  – "pdf" | "pptx"
 */
function ResourceCard({ title, date, description, author, type = "group", driveUrl, fileType = "pdf" }) {
  const iconSvg =
    fileType === "pptx" ? (
      /* PowerPoint icon */
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#1DB954" fillOpacity="0.12" />
        <path d="M14 8h14l10 10v22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" fill="#1DB954" fillOpacity="0.25" stroke="#1DB954" strokeWidth="1.5" />
        <path d="M28 8v10h10" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="24" width="10" height="2" rx="1" fill="#1DB954" />
        <rect x="16" y="29" width="16" height="2" rx="1" fill="#1DB954" fillOpacity="0.6" />
        <rect x="16" y="34" width="12" height="2" rx="1" fill="#1DB954" fillOpacity="0.4" />
      </svg>
    ) : (
      /* PDF icon */
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#1DB954" fillOpacity="0.12" />
        <path d="M14 8h14l10 10v22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" fill="#1DB954" fillOpacity="0.25" stroke="#1DB954" strokeWidth="1.5" />
        <path d="M28 8v10h10" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="14" y="38" fontSize="9" fontWeight="700" fill="#1DB954" fontFamily="sans-serif">PDF</text>
      </svg>
    );

  return (
    <article className="resource-card" aria-label={`${fileType.toUpperCase()} card: ${title}`}>
      {/* Top accent line */}
      <span className="card-accent-line" aria-hidden="true" />

      <div className="card-inner">
        {/* File icon */}
        <div className="card-icon">{iconSvg}</div>

        {/* Header row: title + badge */}
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <span className={`card-type-badge ${type === "individual" ? "badge-individual" : "badge-group"}`}>
            {type === "individual" ? "Individual" : "Group"}
          </span>
        </div>

        {/* Meta row */}
        <div className="card-meta">
          <span className="card-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {date}
          </span>
          <span className="card-author">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            {author}
          </span>
        </div>

        {/* Description */}
        <p className="card-description">{description}</p>

        {/* Download / View button */}
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-download-btn"
          aria-label={`Open ${title} on Google Drive`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {fileType === "pptx" ? "View Slides" : "View / Download"}
        </a>
      </div>
    </article>
  );
}

export default ResourceCard;
