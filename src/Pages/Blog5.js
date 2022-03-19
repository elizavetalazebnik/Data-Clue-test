import React from 'react'
import medical from '../assets/images/medical.jpg'

function Blog5() {
  return (
    <div className="article-container">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={medical}
          alt="coronavirus research equipment"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">
          How Transfer Learning Works For Medical Imaging Tasks
        </h1>
        <p className="article-text">
          Transfer learning is a method of{' '}
          <strong>training deep neural networks</strong> based models to handle
          a specific task after they are trained on a large-scale, generic-scope
          task. The essence of this method is that the knowledge of the neural
          network that was trained for one task is transferred to another task.
          This <strong>two-stage method</strong> is widely used in computer
          vision in medical images.
          <br />
          <br />
          Neural networks are used in various fields such as signal processing,
          computer vision, and natural language processing. As such, the
          transfer learning method is gaining popularity by the day. For
          example, <strong>Google AI researchers</strong> have reported in a
          series of experiments the importance and effectiveness of transfer
          learning in solving medical problems. According to their results,
          models with randomly initialised weights work with the same quality as
          models pre-trained on <strong>ImageNet</strong> (the benchmark dataset
          of images in both the industry and academia).
          <br />
          <br />
          In order to perform transfer learning, the neural network model is
          trained in two stages. First, the model is{' '}
          <strong>pre-trained</strong>. Formally, the neural network model is
          trained on a large dataset with a variety of classes, like ImageNet,
          LabelMe, or COCO. A more detailed list can be found{' '}
          <a
            href="https://blog.cambridgespark.com/50-free-machine-learning-datasets-image-datasets-241852b03b49?gi=c2124e5229bd"
            target="_blank"
            className="external-link"
          >
            here
          </a>
          . Afterward, as the second step, the fine-tuning training. Namely, the
          pre-trained model is further trained but this time on the data of the
          <strong> target</strong> task rather than the generic dataset from the
          pre-training phase.
          <br />
          <br />
          Under the hood, pre-training allows the neural network to use the
          knowledge that was learned at the first stage to solve the required
          task. In the context of transfer learning, the standard architectures
          that were developed for ImageNet, with weights, are retrained for
          <strong> medical tasks.</strong> Medical tasks in computer vision
          range from analysing chest x-rays to recognizing eye infections.
          Despite the widespread use of this method on medical data, the effect
          of the transfer learning approach has not been previously{' '}
          <strong>investigated. </strong>
          Researchers analysed and evaluated hidden representations of neural
          networks for several tasks from the medical field.
        </p>
        <h2 className="article-sub-title">
          Quality of work of pre-trained models
        </h2>
        <p className="article-text">
          At the first stage, the researchers studied the effect of the
          pre-trained model on the <strong>quality of its predictions</strong>.
          The researchers compared models with randomly initialised weights and
          pre-trained weights on ImageNet. Diagnosis of diabetes mellitus and
          recognition of 5 diseases by x-ray of the breast were chosen as tasks
          for testing. Tested models included ResNet50, Inception-v3, and simple
          convolutional neural networks with 4 or 5 layers of
          convolution-batchnorm-ReLU.
        </p>
        <h2 className="article-sub-title">Comparison results:</h2>
        <p className="article-text">
          Pre-training does not significantly affect the quality of neural
          network predictions for medical problems; smaller models produce
          similar results with standard ImageNet architectures. Due to the fact
          that medical tasks are smaller than ImageNet, for large architectures
          with a large number of parameters, Pre-training can{' '}
          <strong>harm</strong> the quality of predictions on a medical task.
        </p>
        <h2 className="article-sub-title">Analysis of hidden predictions</h2>
        <p className="article-text">
          Researchers tested how the traits that randomly initialised and
          pre-trained models learn are different. They compared hidden views
          from models for this. Researchers used{' '}
          <strong>
            singular vector canonical correlation analysis (SVCCA){' '}
          </strong>
          to make the comparison valid. SVCCA allows you to calculate the
          similarity metric for hidden representations from different models. So
          we can see that for large models (ResNet-50 and Inception-v3),{' '}
          <strong>hidden representations</strong> of randomly initialised models
          are more similar than pre-trained representations.
        </p>
      </div>
    </div>
  )
}

export default Blog5
