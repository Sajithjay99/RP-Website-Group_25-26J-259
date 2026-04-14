import React from "react";
import "../styles/ResourceCard.css";

/**
 * ResourceCard — shared animated card for Documents & Slides pages
 *
 * Props:
 *  title       {string}
 *  date        {string}
 *  description {string}
 *  author      {string}
 *  type        {string}   "group" | "individual"
 *  driveUrl    {string}   Google Drive link
 *  fileType    {string}   "pdf" | "pptx"
 *  index       {number}   card index for stagger delay
 */
function ResourceCard({ title, date, description, author, type = "group", driveUrl, fileType = "pdf", index = 0 }) {

  const staggerDelay = `${0.08 + index * 0.1}s`;

  const pdfIcon = (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#1DB954" fillOpacity="0.12" />
      <path d="M14 8h14l10 10v22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"
        fill="#1DB954" fillOpacity="0.2" stroke="#1DB954" strokeWidth="1.4" />
      <path d="M28 8v10h10" stroke="#1DB954" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="23" width="9" height="2" rx="1" fill="#1DB954" />
      <rect x="16" y="28" width="16" height="2" rx="1" fill="#1DB954" fillOpacity="0.65" />
      <rect x="16" y="33" width="12" height="2" rx="1" fill="#1DB954" fillOpacity="0.4" />
      <text x="14.5" y="40.5" fontSize="7" fontWeight="800" fill="#1DB954" fontFamily="monospace" opacity="0.85">PDF</text>
    </svg>
  );

  const pptxIcon = (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#1DB954" fillOpacity="0.12" />
      <path d="M14 8h14l10 10v22a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"
        fill="#1DB954" fillOpacity="0.2" stroke="#1DB954" strokeWidth="1.4" />
      <path d="M28 8v10h10" stroke="#1DB954" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="23" width="16" height="10" rx="2" fill="#1DB954" fillOpacity="0.2" stroke="#1DB954" strokeWidth="1" />
      <circle cx="24" cy="28" r="3" fill="#1DB954" fillOpacity="0.5" />
      <path d="M21 36l3-5 3 5" stroke="#1DB954" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" />
      <text x="13" y="43" fontSize="6.5" fontWeight="800" fill="#1DB954" fontFamily="monospace" opacity="0.85">PPTX</text>
    </svg>
  );

  return (
    <article
      className="resource-card"
      style={{ animationDelay: staggerDelay }}
      aria-label={`${fileType.toUpperCase()} card: ${title}`}
    >
      {/* Animated scan-line shimmer */}
      <div className="scan-line" aria-hidden="true" />

      {/* Top gradient accent bar */}
      <span className="card-accent-line" aria-hidden="true" />

      <div className="card-inner">
        {/* File icon */}
        <div className="card-icon">
          {fileType === "pptx" ? pptxIcon : pdfIcon}
        </div>

        {/* Title + badge */}
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <span
            className={`card-type-badge ${type === "individual" ? "badge-individual" : "badge-group"}`}
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            {type === "individual" ? "Individual" : "Group"}
          </span>
        </div>

        {/* Meta */}
        <div className="card-meta">
          <span className="card-date">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {date}
          </span>
          <span className="card-author">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            {author}
          </span>
        </div>

        {/* Separator */}
        <div className="card-separator" aria-hidden="true" />

        {/* Description */}
        <p className="card-description">{description}</p>

        {/* CTA button */}
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-download-btn"
          aria-label={`Open ${title} on Google Drive`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
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
