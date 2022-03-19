import React from "react"
import consulting from "../assets/images/consulting-img.jpg"

function Consulting() {
    return (
        <>
        <img className="service-banner-img" src={consulting} alt="zoomed in view of two people's arms, shaking hands"/>
        <div className="services--pg-container">
        <h1 className="services-title--consulting-services">Consulting Services</h1>
        <p>We at DataClue believe that data is at the core of the go-forward business strategy for all businesses. It’s all about the data driving business growth and new business opportunities for value creation.</p>
        <h2 className="services-heading2">Services offered: </h2>
        <div className="consulting-grid">
        <div className="services-grid--item">
        <div className="services-consulting--box">
        Advanced Data Algorithm Development
        </div>
        </div>
        <div className="services-grid--item">
        <div className="services-consulting--box">
        Data led transformation.
        </div>
        </div>
        <div className="services-grid--item">
        <div className="services-consulting--box">
        Ethical implementation of AI.
        </div>
        </div>
        <div className="services-grid--item">
        <div className="services-consulting--box">
        Intelligent Data and AI platform creation.
        </div>
        </div>
        <div className="services-grid--item">
        <div className="services-consulting--box">
        Data and Analytics Advisory.
        </div>
        </div>
        <div className="services-grid--item">
        <div className="services-consulting--box">
        Discreet technology team building services.
        </div>
        </div>
        </div>
        </div>
        </>
 )
}

export default Consulting
