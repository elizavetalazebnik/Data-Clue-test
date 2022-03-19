import React from "react"
import algorithmprofile from "../assets/images/a-profile.jpg"
import code from "../assets/images/code.jpg"
import swirls from "../assets/images/swirls.jpg"
import medicalFlow from "../assets/images/medical-flow.jpg"
import analysis from "../assets/images/analysis.jpg"
import machine from "../assets/images/machine.jpg"
import simulation from "../assets/images/simulation.jpg"
import dataset from "../assets/images/dataset.jpg"

function AlgorithmPortfolio() {
    return (
  <>
            <img className="service-banner-img" src={algorithmprofile} alt="laptop with digital graphs on the screen"/>
            <div className="services--pg-container">
            <h1 className="services-title--consulting-services">Algorithm Portfolio</h1>
            <h2 className="services-heading2">Background</h2>
            <p>Over the last year and a half, we at DataClue have developed a range of algorithm and AI solutions for our clients. During the development process, several generic results have been developed outside of the client's scope. These ideas and algorithms are DataClue's IP and have since been used in other clients' projects.</p>
            <h2 className="services-heading2">Presentation structure</h2>
            <img src={code} className="services-wrapped-img" width="250px" />
            <p>The algorithms below are presented in a standard way, to allow the reader to develop a quick understanding of the idea, possible usage, and implementation details. We begin with a brief description of the circumstances in which the algorithm has been developed. We will then provide a quick summary of the algorithm and what it does. Thirdly, we will provide implementation details. Finally, we advise where the proposed algorithm can be used. </p>
            <h2 className="services-heading2">Partially Aware Optimal Coverage Problem</h2>
            <p><strong>Background: </strong>Experts in the food industry assert that precision agriculture is the solution to feeding the world’s growing population. Multiple countries use aeroplanes and drones to capture high-resolution images of the fields. Only partial data is included in these images, which cover some samples of the field. Will we be able to get a good estimate of the entire field from these images? Furthermore, how do we go about sampling?
            </p>
            <br />
            <br />
            <p><strong>Algorithm: </strong>The objective is to determine the optimal coverage of a field with multiple drones. The algorithm uses a Spatio-temporal model to stimulate millions of multi-drone coverages in a field and evaluates their performance. With the field's shape in mind, we use the Bees Algorithm to maximize coverage.</p>
            <br />
            <br />
            <p><strong>Implementation: </strong>In the algorithm, a list of past coverages and a measurement scoring matrix will provide a constant distribution of the area. In addition, we will describe the limitations on coverage policies and the number of agents the algorithm can use. The algorithm produces a list of locations in the area to provide the best coverage policy. This module is written in Python 3.</p>
            <br />
            <br />
            <p><strong>Possible usage: </strong>Coverage problems are common in the agriculture, military, and robotics field.</p>
            <br />
            <br />
            <img src={swirls} className="services-wrapped-img-left" width="250px" />
            <h2 className="services-heading2">Optimal Binary Classification Algorithm</h2>
            <p><strong>Background: </strong>Due to clinical data regulations, a client was only able to gather binary (yes or no) questions daily through clinical patients suffering from a unique disease. The aim was to predict the patients’ state, using the current day report from the following data.</p>
            <br />
            <br />
            <p><strong>Algorithm: </strong>Formally, assume you have a problem in the form of X binary features and a binary target feature Y that you would like to predict from the data. We developed a module that can: 1) perform data exploration which is dedicated to this form of data, 2) automatic and highly customisable visualisations of the data and model’s performance, 3) dynamic and customisable performance analysis of the algorithm’s performance on a range of metrics, and 4) automatic extension for data segments and population-individual type personalisation models. We prove mathematically, that if the data satisfies two assumptions, our algorithm provides the optimal (theoretically practical) performance.</p>
            <br />
            <br />
            <p><strong>Implementation: </strong>The algorithm is easy to use at it just uses Pandas.DataFrame object as input and returns a Sklearn.Estimator object instance.</p>
            <br />
            <br />
            <p><strong>Possible usage: </strong>Data science, meta-learning, automatic machine learning, Questionnaire analysis (clinical, social, etc.).</p>
            <br />
            <br />
            <img src={machine} className="services-wrapped-img" width="250px" />
            <h2 className="services-heading2">Machine Learning Model Stability Analysis</h2>
            <p><strong>Background: </strong>Based on a small number of samples and a large volume of measurements, the client required a prediction model for surgery outcomes. Because the model is intended to be used for clinical decision making, the client asked to see a numerical evaluation of how well it handles unique cases.</p>
            <br />
            <br />
            <p><strong>Product: </strong>We developed a framework that examines the ML model for four cases: 1) Adversarial attacks profiling, 2) Sensitivity analysis for concept drifting, 3) Stability for the introduction of new features, and 4) Prediction of anomaly requests to the model given time-series data.</p>
            <br />
            <br />
            <p><strong>Implementation: </strong>This module is developed in Python3, getting an instance of a Sklearn.Estimator object and returns a full stability report.</p>
            <br />
            <br />
            <p><strong>Possible usage: </strong>Any ML project. Specifically useful for datasets with more features than samples (i.e., with a curse of dimensionality) and auto-ML pipelines.</p>
            <br />
            <br />
            <img src={simulation} className="services-wrapped-img-left"  width="250px" />
            <h2 className="services-heading2">Multi-Agent Multi-Objective Simulation
            </h2>
            <p><strong>Background: Multiple projects involving many participants (agents) interacting with each other in a dynamic environment that changes over time.
            </strong></p>
            <br />
            <br />
            <p><strong>Product:</strong>We developed a multi-agent multi-objective simulation (MAMOS) framework. By using this product, clients can quickly and easily develop a unique, highly detailed simulation of concept interactions. Based on historical data, MAMOS offers each agent in the simulation a unique AI that operates as a replica of a realistic agent. There are a few examples of how clients use this technology: 1) Pharmacokinetics, in organ and cell interactions with a drug, 2) optimal pricing allocation based on client’s historical purchases, and 3) multi-robot rescue mission coordination without a central computer.</p>
            <br />
            <br />
            <p><strong>Implementation: </strong>The module is developed in Python3 for an easy-to-use version with low-performance and C# for high-performance.</p>
            <br />
            <br />
            <p><strong>Possible usage: </strong>Limitless.</p>
            <br />
            <br />
            <h2 className="services-heading2">Medical Flow Graph Creator</h2>
            <img src={medicalFlow} className="services-wrapped-img" width="250px" />
            <p><strong>Background:</strong>Using spatial data and knowledge, modern, clinical, and biological mathematical models accurately represent and simulate bio-clinical dynamics and can be used for treatment protocol. This includes outcome prediction. Often, healthcare professionals requested a flow graph to be provided for a simulator or model.</p>
            <br />
            <br />
            <p><strong>Product: we offer a pure JavaScript tool that allows the creation of flow graphs. The tool is dedicated to clinical usage and enables the user to easily create any type of flow graph, such as for the circulatory system of mammals.</strong></p>
            <br />
            <br />
            <p><strong>Implementation: </strong>Pure front-end JS, self-hosted on any device. No installation is required.</p>
            <br />
            <br />
            <p><strong>Possible usage: </strong>Clinical data preparation for drug discovery and treatment protocol optimization algorithms.</p>
            <br />
            <br />
            <img src={analysis} className="services-wrapped-img-left"  width="250px" />
            <h2 className="services-heading2">Online General Sentiment Analysis
            </h2>
            <p><strong>Background: </strong>A number of our natural language processing (NLP) projects included sentiment analysis for our clients. In the process of re-developing the same solution multiple times, we developed a multi-purpose sentiment analysis pipeline to provide suitable and fast results.</p>
            <br />
            <br />
            <p><strong>Algorithm: </strong>We developed an online general, auto-machine learning sentiment analysis model for natural language processing (NLP) pipelines. This algorithm can receive a list of documents (of any size) and can generate a high performing classification model. The model trains on 5Mb of data in 17 seconds with 1 I5-8th generation CPU. (Each classification of the model can be explained using Shap functions). It uses minimal data as the proposed model can achieve 70% accuracy (tested on 110 datasets with binary target tagging) using just 1.4Mb of data.</p>
            <br />
            <br />
            <p><strong>Implementation: </strong>The module is implemented in pure front-end JS. No installation is required. A simple GUI to train the model is provided as well.</p>
            <br />
            <br />
            <p><strong>Possible usage: </strong> Any NLP-related project.</p>
            <br />
            <br />
            <img src={dataset} className="services-wrapped-img" width="250px" />
            <h2 className="services-heading2">Dataset Summartization
            </h2>
            <br />
            <br />
            <p><strong>Background:</strong> Many of our clients ask for a quick but accurate estimation of model performance. As ML/DL model training is a resource-intensive and time-consuming task, we developed a dataset summarization to tackle this challenge. In this way, training an ML/DL model is both faster and cheaper. It also provides a fair estimate of the overall model's performance by using a subset of the original data (that has the same information as the whole data but is several sizes smaller).</p>
            <br />
            <br />
            <p><strong>Algorithm: </strong>This algorithm enables us to summarise large scale datasets into a smaller scale, without losing the properties we need from the original dataset. This results in a significantly faster analysis of the data, with minor changes in the results.</p>
            <br />
            <br />
            <p><strong>Implementation: </strong>The algorithm is implemented in Python 3, getting a Sklearn.Estimator or Keras object as the ML\DL model, a dataset as Pandas.DataForm object, and a metric function. It returns the trained model on the summary dataset.</p>
            <br />
            <br />
            <p><strong>Possible usage: </strong>Any ML\DL project.</p>
            </div>
            </>
        )
}

export default AlgorithmPortfolio
