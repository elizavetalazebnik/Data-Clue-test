import React from 'react'
import artithmatic from '../assets/images/arithmatic.jpg'

function Blog1() {
  return (
    <div className="article-container">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={artithmatic}
          alt="woman is standing with her back to the camera, all we see is her shadow. She is writing math equations on a white board"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">
          5 Cool Open-Source Machine Learning Projects and What We Can Learn
          From Them
        </h1>
        <p className="article-text">
          Given the great boom in <strong>algorithm development</strong>,
          business and the sight of large companies such as Apple, Amazon,
          Google to mention a few in the accelerated development of Artificial
          Intelligence (AI), the interest to learn and strengthen (for those
          already experienced) knowledge in this field, there are various
          options available <strong>open-source Framework</strong> for
          programming in this specific field.
          <br />
          <br />
          Even though the process of IA applications is in constant development
          and improvement as engineers discover new{' '}
          <strong>capabilities</strong> and abilities to improve their use, the
          available libraries allow great support for many programs in this
          field, and in this article, we bring you the most outstanding open
          source for their application.
          <br />
          <br />
          Let's remember that AI is the{' '}
          <strong>intelligence exhibited by machines</strong>, also called
          computational Intelligence; and as we have already described in
          another opportunity; Deep Learning, robotics, and AI are three very
          different but interrelated branches, of which the last one is perhaps
          the one that today has the greatest boom due to its{' '}
          <strong>diversity</strong> of applications in different sectors of
          everyday life: from apps to search engines on the net as Google use it
          to improve the user experience.
        </p>
        <h2 className="article-sub-title">TensorFlow</h2>
        <p className="article-text">
          As its official website indicates, it is an open-source software
          library for high-performance numerical computation. It was developed
          by the <strong>Google Brain</strong> team based on the advances in
          deep learning neural networks they had with DistBelief in 2011.
          <br />
          <br />
          TensorFlow due to its flexible architecture can run on multiple CPUs
          and GPUs with additional CUDA extensions for general-purpose computing
          on GPUs. It is available on 64-bit Linux, MacOS and Android and iOS
          mobile platforms.
          <br />
          <br />
          TensorFlow is for <strong>numerical computation</strong> using data
          flow graphs. The nodes in the graph represent mathematical operations,
          while the edges of the graph represent the multidimensional data sets
          (tensors) communicated between them.
          <br />
          <br />
          TensorFlow provides <strong>multiple APIs</strong>. The lower-level
          API, TensorFlow Core, gives you complete programming control.
          Top-level APIs are based on TensorFlow Core. These top-level APIs are
          generally easier to learn and use than TensorFlow Core.
          <br />
          <br /> Also, the higher level APIS allows the respective tasks to be
          easier and more consistent between the different developers. A
          high-level API such as tf.estimator helps you manage data sets,
          estimators, training, and inference.
          <br />
          <br /> Thanks to this Google can meet their needs in systems and can
          develop and train neural networks that allow you to detect and
          decipher patterns and correlations analogous to learning and reasoning
          used by humans.
          <br />
          <br /> Among the applications for which TensorFlow is the foundation,
          is the DeepDream automated image processing software. There is also
          RankBrian, officially implemented on October 26, 2015, supported by
          TensorFlow, to handle a substantial number of search queries on
          google.com
          <br />
          <br />
          Another very popular application based on TensorFlow is SmartReply,
          Deep LSTM model to automatically generate email responses. In addition
          to Google, numerous recognized companies use TensorFlow for their IA
          applications: Airbnb, AMD, Nvidia, Uber, SAP, Kakao, Coca-Cola, among
          others.
        </p>
        <h2 className="article-sub-title">Apache SystemML</h2>
        <p className="article-text">
          It is a <strong>flexible computer learning system</strong> that
          automatically scales to Spark and Hadoop clusters. It was created in
          2010 by IBM written in Java language and released as open-source code
          on November 2, 2015. It is a kind of deep learning and Machine
          Learning.
          <br />
          <br />
          An ideal workplace for automatic learning with large data. It has
          reached one of the top-level project levels at the{' '}
          <strong>Apache Software Foundation</strong>. Its most important main
          features are:
          <br />
          <br />
          1) Customization algorithm through R-like and Python-like languages.
          2) Multiple execution modes, including Spark MLContext, Spark Batch,
          Hadoop Batch, Standalone, and JMLC (Java Machine Learning Connector).
          3) Automatic optimization based on cluster data and characteristics to
          ensure efficiency and scalability.
          <br />
          <br /> It can run on Apache Spark and is considered as the SQL for
          automatic learning. Future algorithm developments of SystemML include
          additional in-depth learning with GPU capabilities, such as importing
          and executing neural network architectures and pre-formed models for
          training.
          <br />
          <br />
          Among the most outstanding libraries of this application, we find the
          JMLC for System ML, which is a programmatic interface to interact with
          SystemML in an embedded way, where in addition to being used as a
          scoring API, incorporated can be used for tasks such as unsupervised
          learning.
        </p>
        <h2 className="article-sub-title">Caffe</h2>
        <p className="article-text">
          It was initiated by Yangqing during his Ph.D. at UC Berkeley and then
          developed by Berkeley AI Research (BAIR) and community collaborators.
          It focuses primarily on convolutional networks for{' '}
          <strong>computer vision applications</strong>. Caffe is a solid and
          popular choice for machine vision tasks and many successful models
          made by Caffe Model Zero users can be downloaded.
          <br />
          <br /> Caffe supports different types of deep learning focused on
          image classification and segmentation. It is used by CNN, RCNN, LSTM,
          and fully connected to neural network designs. Supports GPU and
          kernel-based CPU from computational acceleration libraries such as
          Nvidia CuDNN and Intel MKL.
          <br />
          <br /> Yahoo integrated Caffe with Apache Spark to create
          CaffeOnSpark, a deep distributed learning framework. Expressive
          architecture fosters application and innovation. Models and
          optimization are defined by configuration without rigid coding. Speed
          makes Caffe perfect for industry research and implementation
          experiments.
        </p>
        <h2 className="article-sub-title">Torch</h2>
        <p className="article-text">
          An open-source machine learning library, a scientific computing
          framework and a scripting language based on the Lua programming
          language.
          <br />
          <br />
          Among its features we have: 1) A powerful N-dimensional matrix. 2)
          MAny routines for indexing, cutting, transposing, etc. 3) Incredible
          interface for C, through LuaJIT. 4) Linear Algebra Routines. 5) Neural
          network and energy-based models. 6) Numerical optimization routines.
          7) The fast and efficient GPU support. 8) Inscrutable, with ports for
          iOS and Android backends.
          <br />
          <br />
          It has been expanded for use in <strong>Android and iOS</strong> and
          has been used to create hardware implementations for data streams such
          as those found in neural networks. PyTorch is an open-source machine
          learning library for Python, which is used for applications such as
          natural language processing. It is mainly developed by Facebook's
          Artificial Intelligence research group and Uber's "Pyro" software for
          probabilistic programming.
        </p>
        <h2 className="article-sub-title">Mycroft</h2>
        <p className="article-text">
          Affirming that it is the world's first open-source wizard and can be
          used in anything from a science project to an enterprise software
          application. <strong>Mycroft works anywhere</strong>: on a desktop
          computer, inside a car, or a Raspberry Pi. This is open-source
          software that can be freely remixed, expanded, and enhanced.
          <br />
          <br />{' '}
          <strong>
            Mycroft is a virtual assistant and browser knowledge
          </strong>{' '}
          of free and open-source software for Linux systems that use natural
          language to receive commands to run. Mycroft uses the syntax analyzer
          called Adapt to convert the natural language to data structures
          processed by the computer. For voice synthesis, it uses Mimic, which
          is based on the Festival Lite system. It is designed to be modular, so
          users can change their components.
          <br />
          <br />
          <strong>It is a classic practical assistant:</strong> it can tell you
          the date, time, weather, set alarms, or listen to the news, as well as
          answer all kinds of objective questions. These are just some of the
          Automatic Learning projects that have been developed and improved for
          the optimization of programming languages and algorithm development.
          However, other of these projects can be found, and several programmers
          assure that they will always be in constant evolution so that IA and
          modern technologies will innovate more and more to have a better life
          and a better future.
          <br />
          <br />
          As far as optimization is concerned, different programs have several
          approaches, which include training customers and vendor partners on
          ways to make their machine learning code run faster on the hardware,
          as well as implementing some learning functions on the parts, which is
          always faster.
          <br />
          <br /> Finally, engineers and algorithm developers are constantly in
          the field, talking to IT and line of business managers to get insights
          into how predictive analytics based on machine learning can{' '}
          <strong>solve real business problems.</strong>
        </p>
      </div>
    </div>
  )
}

export default Blog1
