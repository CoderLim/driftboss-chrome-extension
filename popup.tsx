import { useState } from "react"

import screenshot1 from "data-base64:~assets/screenshots/screenshot1.png"

import "./popup.css"

function IndexPopup() {
  const [isHovered, setIsHovered] = useState(false)

  const handlePlayClick = () => {
    chrome.tabs.create({ url: "https://driftbossgame.org" })
  }

  return (
    <div className="popup-container">
      <div className="game-screenshot">
        {/* Game screenshot background */}
        <img
          src={screenshot1}
          alt="Drift Boss Game Screenshot"
          className="screenshot-image"
        />
        <div className="overlay">
          <button
            className={`play-button ${isHovered ? "hovered" : ""}`}
            onClick={handlePlayClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg
              className="play-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="footer">
        <h3 className="game-title">Drift Boss</h3>
        <p className="game-subtitle">Drift Boss – Click to Start</p>
      </div>
    </div>
  )
}

export default IndexPopup
