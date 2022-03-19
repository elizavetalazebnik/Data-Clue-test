import React from 'react'
import { Link } from 'react-router-dom'
import arithmatic from '../assets/images/arithmatic.jpg'
import softwaredeveloper from '../assets/images/softwaredeveloper.jpg'
import medical from '../assets/images/medical.jpg'
import outsourcing from '../assets/images/outsourcing.jpg'
import latestnews from '../assets/images/latestnews.jpg'

const blogs = [
  {
    title: 'How Transfer Learning Works for Medical Imaging Tasks',
    date: '01.03.22',
    img: medical,
    alt: 'coronavirus research kit',
    text: 'Transfer learning is a method of training deep neural networks based models to handle a specific task after they are trained on a large-scale, generic-scope task.',
    id: 2,
    href: '/blog/medical-imaging',
  },
  {
    title: 'Professional AI',
    date: '01.02.22',
    img: softwaredeveloper,
    alt: 'a man sits with his back to us, while he codes on his computer screen',
    text: 'Artificial Intelligence is an ever-growing, revolutionary field of science and technology. It is arguably the next great leap for society to reach a new and profound level of advancement.',
    id: 3,
    href: '/blog/professional-ai',
  },
  {
    title: 'The Latest News in the Field of Information Retrieval',
    date: '01.01.22',
    img: latestnews,
    alt: 'picture of the side of the earth from space',
    text: 'Since ancient times, man has tried to represent information through various means. The supports have evolved; nowadays, information is also represented digitally.',
    id: 4,
    href: '/blog/information-retrieval',
  },
  {
    title: 'Reasons You Need To Outsource Your Algorithm Development',
    date: '01.12.21',
    img: outsourcing,
    alt: 'an office with a glass wall, a group of people are sat working around a circular desk',
    text: 'When it comes down to startups, there are two vital things they need more than anything in the world, and these are Control and Speed. While speed gets the product to be marketed faster, control, on the other hand, allows you to reap every benefit of your company’s success.',
    id: 5,
    href: '/blog/outsourcing',
  },
  {
    title:
      '5 Cool Open-Source Machine Learning Projects and What We Can Learn From Them',
    date: '01.11.21',
    img: arithmatic,
    alt: 'white robot with a picture of the moon behind it',
    text: 'Given the great boom in algorithm development, business and the sight of large companies such as Apple, Amazon, Google to mention a few in the accelerated development of Artificial Intelligence (AI)...',
    id: 1,
    href: '/blog/machine-learning-projects',
  },
]

function Blog() {
  return (
    <>
      <h1 className="cs-title">BLOGS</h1>
      <div className="cs-container">
        <div className="cs-blogs">
          {blogs.map((b) => (
            <div key={b.id}>
              <div className="cs-blog-content">
                <img
                  src={b.img}
                  alt={b.alt}
                  width="200"
                  height="200"
                  className="blog-img"
                />
                <div className="cs-blog--info">
                  <Link to={`${b.href}`} className="blog-link">
                    {b.title}
                  </Link>
                  <p className="blog-date">{b.date}</p>
                  <p className="blog-text">{b.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog
