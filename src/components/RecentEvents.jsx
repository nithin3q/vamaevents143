import React, { useState } from 'react';
import '../styles/RecentEvents.css';
// import video1 from '../assets/video/recent1.mp4';
import video2 from '../assets/video/recent2.mp4';
import video3 from '../assets/video/recent3.mp4';
// import video4 from '../assets/video/recent4.mp4';
import video5 from '../assets/video/recent5.mp4';
import video6 from '../assets/video/recent6.mp4';
import video7 from '../assets/video/recent7.mp4';
import video8 from '../assets/video/recent8.mp4';
import video9 from '../assets/video/recent9.mp4';
import video10 from '../assets/video/recent10.mp4';
import video11 from '../assets/video/recent11.mp4';
import video12 from '../assets/video/recent122.mp4';
import video13 from '../assets/video/recent13.mp4';
import video14 from '../assets/video/recent144.mp4';
import LoadingAnimation from './LoadingAnimation';

const RecentEvents = () => {
    const [loading, setLoading] = useState(new Array(14).fill(true));

    const handleLoadedData = (index) => {
        setLoading(prevLoading => {
            const newLoading = [...prevLoading];
            newLoading[index] = false;
            return newLoading;
        });
    };

    const videos = [
        { src: video7, title: "Event 1", date: "January 2022", tags: ["MUSIC"] },
        { src: video12, title: "Event 2", date: "June 2022", tags: ["MUSIC"] },
        { src: video14, title: "Event 3", date: "May 2023", tags: ["BIRTHDAY"] },
        { src: video6, title: "Event 4", date: "May 2023", tags: ["WEDDING"] },
        { src: video2, title: "Event 5", date: "February 2023", tags: ["WEDDING"] },
        { src: video8, title: "Event 6", date: "March 2023", tags: ["WEDDING"] },
        { src: video9, title: "Event 7", date: "May 2023", tags: ["CEREMONY"] },
        { src: video10, title: "Event 8", date: "April 2023", tags: ["WEDDING"] },
        { src: video11, title: "Event 9", date: "July 2023", tags: ["RECEPTION"] },
        { src: video13, title: "Event 10", date: "September 2023", tags: ["WEDDING"] },
        { src: video3, title: "Event 11", date: "March 2024", tags: ["DANCE"] },
        { src: video5, title: "Event 12", date: "February 2024", tags: ["DANCE"] },
    ];

    return (
        <div className="containerses">
            <h1 className="text-center py-4 text-custom2"><span className="text-custom">Our </span>Recent Events</h1>
            <div className="card-columns">
                {videos.map((video, index) => (
                    <div key={index} className="card text-white border-0">
                        <div className="position-relative">
                            {loading[index] && <LoadingAnimation />}
                            <video
                                className="video-card"
                                src={video.src}
                                autoPlay
                                loop
                                muted
                                onLoadedData={() => handleLoadedData(index)}
                                style={{ display: loading[index] ? 'none' : 'block' }}
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-between align-items-start p-5">
                                <div className="d-flex justify-content-between w-100 mb-3">
                                    <div>
                                        {video.tags.map((tag, idx) => (
                                            <span key={idx} className="badge badge-info mr-2">{tag}</span>
                                        ))}
                                    </div>
                                    <a href="javascript://">
                                        <div className="myicoo"></div>
                                    </a>
                                </div>
                                <div className="mb-4">
                                    <div className="h3">
                                        <a className="text-white text-decoration-none" href="javascript://">{video.title}</a>
                                    </div>
                                </div>
                                <div className="text-light">{video.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentEvents;
