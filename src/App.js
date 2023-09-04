import React, { useState } from "react";
import profilePic from './images/image-jeremy.png'
import data from './data.json'

function App() {
  const [timeframe, setTimeframe] = useState("weekly")

  const colors = [
    "orange",
    "cyan",
    "red",
    "green",
    "violet",
    "yellow"
  ]

  const handleTimeFrame = (e) => {
    const links = document.querySelectorAll(".time-select-item")
    links.forEach((link, idx) => {
      link.classList.remove("active")
    })
    setTimeframe(e.target.id)
    e.target.classList.add("active")
  }

  const createResultBox = (item, idx) => {
    return (
      <div className={`result-item ${colors[idx]}`}>
          <div className="result-item-content">
            <div>
              <span className="topic-title">
                {item.title}
              </span>
              <span className="topic-menu">...</span>
            </div>
            <div className="result-item-content-bottom">
              <span className="topic-time">
                {
                timeframe === "daily" 
                ? data[idx].timeframes.daily.current
                : timeframe === "weekly"
                ? data[idx].timeframes.weekly.current
                : data[idx].timeframes.monthly.current
                }hrs
              </span>
              <span className="topic-date">
                {
                  timeframe === "daily"
                  ? `Last Day - ${data[idx].timeframes.daily.previous}hrs`
                  : timeframe === "weekly"
                  ? `Last Week - ${data[idx].timeframes.weekly.previous}hrs`
                  : `Last Month - ${data[idx].timeframes.monthly.previous}hrs`
                }
              </span>
            </div>
            
            
            
          </div>
        </div>
    )
  }

  return (
    <>
      <div className="profile">
        <div className="profile-top">
          <div className="profile-pic">
            <img src={profilePic} alt="Jeremy Robson" />
          </div>

          <div className="profile-name">
            <div className="profile-name-top">
              Report for
            </div>
            <div className="profile-name-bottom">
              Jeremy Robson
            </div>
          </div>
        </div>

        <ul className="time-select">
          <li className="time-select-item" id="daily" onClick={handleTimeFrame}>Daily</li>
          <li className="time-select-item active" id="weekly" onClick={handleTimeFrame}>Weekly</li>
          <li className="time-select-item" id="monthly" onClick={handleTimeFrame}>Monthly</li>
        </ul>
        
      </div>
      <div className="results">
        {
          data.map((item, idx) => (
            <>
              {createResultBox(item, idx)}
            </>
          ))
        }
        
      </div>
    </>
  );
}

export default App;
