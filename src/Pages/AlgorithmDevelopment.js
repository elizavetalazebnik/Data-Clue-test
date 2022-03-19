import React from "react"
import algorithmdevelopment from "../assets/images/algorithm-development.jpg"
import algorithmdevelopment2 from "../assets/images/algorithm-development-2.jpg"

function AlgorithmDevelopment() {
    return (
        <>
         <img src={algorithmdevelopment} className="service-banner-img"/>
         <div className="services--pg-container">
         <h1  className="services-title--consulting-services">Algorithm, AI & Data Science Services</h1>
         <img src={algorithmdevelopment2} className="services-wrapped-img" width="250px" />
         <p>Firms have increasingly adopted and embedded algorithms into their operating models. This innovation has allowed companies to differentiate themselves in the market and improve the efficiency with which they provide goods and services to customers.
         <br />
         <br />
         Algorithms are now responsible for a whole host of applications, from targeting consumers with bespoke advertisements, through to product recommendations and filtering what content we see online (to name just a few).
         <br />
         <br />
         With these algorithms capable of processing vastly more data than before, and the ability to adapt to each unique interaction of an individual customer, the prospects for businesses to capitalise and take a competitive advantage in the market have never been greater.
         <br />
         <br />
         With new and quickly evolving technology, regulations and guidelines are still developing, which created a challenging accountability, transparency and compliance landscape for algorithms.
         <br />
         <br />
         Our specialist Advanced Algorithm Development Team can help organisations with our range of development and assurance expertise in algorithm technology, risk management and coding skills. Our approach gives careful consideration to relevant regulatory requirements and industry standards and leverages of our proprietary algorithm control framework and validation methodologies, which we have developed while working across different industries and sectors.
         <br />
         <br />
         DataClue can assist organisations in identifying and understanding how they use their algorithms. We can also challenge related governance and oversight, examine the adequacy of algorithm policies and procedures, identify, manage and mitigate risks. Moreover, we can assess whether the control framework meets industry best practice, or relevant defined standards. Where needed, we will also support specific algorithm review activities, including code reviews, making use of our specialist coding teams across a range of programming languages.
         </p>
         </div>
        </>
 )
}

export default AlgorithmDevelopment
