import { useState } from "react"

import "./popup.css"

function IndexPopup() {
  const [isHovered, setIsHovered] = useState(false)

  const handleOpenClick = () => {
    chrome.tabs.create({ url: "https://csvviewer.net" })
  }

  return (
    <div className="popup-container">
      <div className="csv-preview">
        <div className="csv-grid" aria-hidden="true">
          <div className="csv-cell csv-header">Name</div>
          <div className="csv-cell csv-header">Email</div>
          <div className="csv-cell csv-header">Status</div>
          <div className="csv-cell">Alex</div>
          <div className="csv-cell">alex@example.com</div>
          <div className="csv-cell">Active</div>
          <div className="csv-cell">Mia</div>
          <div className="csv-cell">mia@example.com</div>
          <div className="csv-cell">Pending</div>
        </div>
        <div className="overlay">
          <button
            className={`open-button ${isHovered ? "hovered" : ""}`}
            onClick={handleOpenClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Open CSV Viewer"
          >
            <svg
              className="open-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="footer">
        <h3 className="app-title">CSV Viewer</h3>
        <p className="app-subtitle">Open CSVViewer.net</p>
      </div>
    </div>
  )
}

export default IndexPopup
