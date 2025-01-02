import React, { useState } from "react";
import "../styles/RecentEvents.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCalendar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const RecentEvents = () => {
  const [showAll, setShowAll] = useState(false);

  const videos = [
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312828/recent7_bzqkbe.mp4",
      title: "Event 1",
      date: "January 2022",
      tags: ["MUSIC"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312868/recent122_aijeik.mp4",
      title: "Event 2",
      date: "June 2022",
      tags: ["WEDDING"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312876/recent144_tr0y0l.mp4",
      title: "Event 3",
      date: "May 2023",
      tags: ["DANCE"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312823/recent6_gfjdgl.mp4",
      title: "Event 4",
      date: "May 2023",
      tags: ["WEDDING"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312787/recent2_urspde.mp4",
      title: "Event 5",
      date: "February 2023",
      tags: ["WEDDING"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312835/recent8_l4emud.mp4",
      title: "Event 6",
      date: "March 2023",
      tags: ["WEDDING"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312843/recent9_eexejm.mp4",
      title: "Event 7",
      date: "May 2023",
      tags: ["CEREMONY"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312848/recent10_udbxdn.mp4",
      title: "Event 8",
      date: "April 2023",
      tags: ["WEDDING"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312854/recent11_ccytzf.mp4",
      title: "Event 9",
      date: "July 2023",
      tags: ["RECEPTION"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312862/recent13_w5wzyf.mp4",
      title: "Event 10",
      date: "September 2023",
      tags: ["DANCE"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312807/recent3_ppczmb.mp4",
      title: "Event 11",
      date: "March 2024",
      tags: ["DANCE"],
    },
    {
      src: "https://res.cloudinary.com/drjmfligo/video/upload/v1719312815/recent5_xsby9o.mp4",
      title: "Event 12",
      date: "February 2024",
      tags: ["WEDDING"],
    },
  ];
  const videosToDisplay = showAll ? videos : videos.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="events-container"
    >
      <motion.h1
        className="events-title"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">Our  Recent Events</span>
      </motion.h1>

      <div className="events-grid">
        {videosToDisplay.map((video, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="video-wrapper">
              <video
                className="event-video"
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="event-overlay">
                <div className="event-header">
                  <div className="tags-container">
                    {video.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="event-tag"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <motion.button
                    className="like-button"
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </motion.button>
                </div>
                <div className="event-info">
                  <h3 className="event-title">{video.title}</h3>
                  <div className="event-date">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <motion.button
          className="view-more-btn"
          onClick={() => setShowAll(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Events
          <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default RecentEvents;
