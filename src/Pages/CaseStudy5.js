import React from 'react'
import football from '../assets/images/football.jpg'

function CaseStudy5() {
  return (
    <div className="article-container" id="secure-signature">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={football}
          alt="blue skies, sun is shining on a very green football pitch. There is a silver and orange football boot and a football on the pitch."
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">Football (Soccer) Players Analysis</h1>
        <h2 className="article-sub-title">The Challenge</h2>
        <p className="article-text">
          Football is the number one sport that generates {' '}
          <strong>significant</strong> sums of revenue and wealth for it's clubs,
          sponsors and players on a global scale. Hence a momentous amount of time, effort,
          money and technology is invested by each club to create their perfect
          team.
          <br />
          <br />
          Continuous data analysis is carried out of historical games. For example, the number of touches a team makes to improve their chances of scoring and inevitably winning the game. Movements of all players on the pitch
          are analysed, scrutinised, monitored and evaluated all in parallel. This is then
          repeated a further 22 times for each player on the pitch in their{' '}
          <strong>specific position</strong>. There are multiple complexities to
          monitor, evaluate and perform an automatic analysis of
          each individual player.
        </p>
        <h2 className="article-sub-title">The Algorithmic Developed</h2>
        <p className="article-text">
          <strong>1.</strong> We kicked off the project by defining and collecting
          soft classification for each "move". By using this approach we were able
          to gather significant data about each player and the team as a whole.
          <br />
          <br />
          <strong>2.</strong> We then used a CNN (DL) model to
          locate each player. This allowed us to log each players details.
          <br />
          <br />
          <strong>3.</strong> The
          <a
            href="https://pyimagesearch.com/2018/07/30/opencv-object-tracking/"
            target="_blank"
            className="external-link"
          >
             {" "}video tracking algorithm
          </a>{' '}
          was then launched to track each player on the pitch throughout the
          entire game. The Video capture and recording process involved no
          manual setup or camera operator. Capturing the entire pitch, live in
          4K video, from multiple various angles all at the push of a button.
          <br />
          <br />
          <strong>4.</strong> We added a move "noise" to allow us to manage new moves during the training and data gathering phases. Note that most of the time "moves" are not found.
          <br />
          <br />
          <strong>5.</strong> All the information collected at this point is
          used during training and coaching sessions. This is to highlight areas for improvement, create bespoke
          training plans for each player based on their individual weaknesses and
          improve the teams overall performance in live games.
          <br />
          <br />
          <strong>6. </strong>Lastly, we used a video tracking algorithm to follow each player
          over time. Every 10 seconds, we took the last 5 seconds of video and
          converted the paths of all the players into 2d functions. Using this
          data and the historical moves recorded, we used a FcNN (DL) to
          classify if a move had been shown.
          <br />
          <br />
        </p>
        <h2 className="article-sub-title">Technology Stack</h2>
        <ul className="article-list">
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Python 3.7
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> C++
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> TensorFlow
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Keras
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> OpenCV, scikit, Pillow
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Video algorithm (MIL and CSRT)
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Ubuntu16.04 Server
          </li>
          <li className="article-list--item">
            {' '}
            <span className="dot">&bull;</span> Google Bucket API
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CaseStudy5
