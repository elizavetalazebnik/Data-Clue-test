import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arithmatic from '../assets/images/arithmatic.jpg'
import outsourcing from '../assets/images/outsourcing.jpg'
import softwaredeveloper from '../assets/images/softwaredeveloper.jpg'
import medical from '../assets/images/medical.jpg'
import latestNews from '../assets/images/latestnews.jpg'

const sliderDetails = [
  {
    link: '/blog/machine-learning-projects',
    id: 1,
    title:
      '5 Cool Open-Source Machine Learning Projects and what we can learn from them.',
    image: arithmatic,
    alt: 'woman is standing with her back to the camera, all we see is her shadow. She is writing math equations on a white board',
    text: 'Given the great boom in algorithm development, business and the sight of large companies such as Apple, Amazon, Google to mention a few in the accelerated development of Artificial Intelligence (AI)...',
  },
  {
    link: '/blog/medical-imaging',
    id: 2,
    title: 'How Transfer Learning Works for Medical Imaging Tasks',
    image: medical,
    alt: 'coronavirus research equipment',
    text: 'Transfer learning is a method of training deep neural networks based models to handle a specific task after they are trained on a large-scale, generic-scope task. The essence of this method is that the knowledge of the neural network that was trained for one task is transferred to another task.',
  },
  {
    link: '/blog/professional-ai',
    id: 3,
    title: 'Professional AI - Will Automatic Machine Learning replace us?',
    image: softwaredeveloper,
    alt: 'a man sits with his back to us, while he codes on his computer screen',
    text: 'Artificial Intelligence is an ever-growing, revolutionary field of science and technology. It is arguably the next great leap for society to reach a new and profound level of advancement.',
  },
  {
    link: '/blog/information-retrieval',
    id: 4,
    title: 'The latest news in the field of information retrieval',
    image: latestNews,
    alt: 'picture of the side of the earth from space',
    text: 'Since ancient times, man has tried to represent information through various means. The supports have evolved; nowadays, information is also represented digitally.',
  },
  {
    link: '/blog/outsourcing',
    id: 5,
    title: 'Reasons you need to outsource your algorithm development',
    image: outsourcing,
    alt: 'an office with a glass wall, a group of people are sat working around a circular desk',
    text: 'When it comes down to startups, there are two vital things they need more than anything in the world, and these are Control and Speed. While speed gets the product to be marketed faster, control, on the other hand, allows you to reap every benefit of your company’s success.',
  },
]

function Slider() {
  const [value, setValue] = useState(0)

  return (
    <>
      <div className="case-studies-center">
        <h1 className="title case-studies__title">
          Would you like to learn more? Read our Blogs
        </h1>
        <Link to="/blogs" className="link case-studies__link">
          VIEW ALL BLOGS
        </Link>
      </div>
      <div className="cs-container">
        <div className="cs-blogs">
          <div className="cs-blog-content blog--slider">
            <img
              src={sliderDetails[value].image}
              alt={sliderDetails[value].alt}
              width="200"
              height="200"
              className="blog-img"
            />
            <div className="cs-blog--info">
              <Link
                className="slider__title title"
                to={sliderDetails[value].link}
              >
                {sliderDetails[value].title}
              </Link>
              <p className="slider-text"> {sliderDetails[value].text} </p>
              <div className="slider-button-container">
                <button
                  type="button"
                  className="slider-btn"
                  onClick={() =>
                    value === 0 ? setValue(4) : setValue(value - 1)
                  }
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  className="slider-btn"
                  onClick={() =>
                    value === 4 ? setValue(0) : setValue(value + 1)
                  }
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
