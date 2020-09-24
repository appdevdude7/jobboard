import React from 'react'
import './JobCard.css';

const JobCard = ({logo,company}) => {
    return (
        <div className="job-card">
            <div className="job-card-left">
                <div className="job-card-logo">
                </div>
                <div className=" job-card-details">
                    <h3>{company}</h3>
                </div>
            </div>
            <div className="job-card-right"></div>
        </div>
    )
}

export default JobCard
