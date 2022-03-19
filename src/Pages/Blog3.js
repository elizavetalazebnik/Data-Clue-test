import React from 'react'
import latestnews from '../assets/images/latestnews.jpg'

function Blog3() {
  return (
    <div className="article-container">
      <div className="article-container--img">
        <img
          width="200"
          height="200"
          className="article-banner-img individual-img"
          src={latestnews}
          alt="picture of the side of the earth from space,"
        />
      </div>
      <div className="article-container--text">
        <h1 className="article-title">
          The Latest News in the Field of Information Retrieval
        </h1>
        <p className="article-text">
          Since ancient times, man has tried to <strong>represent</strong>{' '}
          information through various means. The supports have evolved;
          nowadays, information is also represented <strong>digitally</strong>.
          Coupled with this, the exponential growth of information on the
          Internet, available in various formats and information systems, has
          brought with it an overload... Then it becomes increasingly{' '}
          <strong>important </strong>
          to process all available information so that it can be recovered and
          used for various purposes.
          <br />
          <br />
          <strong>Information Retrieval</strong> is an area that has been
          experiencing increasing interest since the late 1950s. It is now
          becoming more important because of the <strong>value</strong> of
          information as a resource for the development of processes, for the
          acquisition of knowledge, to guarantee the{' '}
          <strong>sustainability</strong> of current organisations in the face
          of constant changes in the environment (customers, competitors,
          legislation, etc.).
          <br />
          <br />
          The success of any operation within an organisation depends on the
          <strong> quality</strong> of information available to decision-makers
          and individuals directly linked to the situation.
          <br />
          <br /> Information retrieval is the next step in determining
          information needs. It can be recovered through different tools:
          databases, Internet, thesauri, ontologies, maps... Knowing and
          managing these tools contribute to quality recovery. The recovery
          process is carried out through queries to the{' '}
          <strong>database</strong> where the structured information is stored,
          utilizing an appropriate interrogation language. It is necessary to
          take into account the key elements that allow the search, determining
          a greater degree of relevance and precision, such as indexes,
          keywords, and the phenomena that can occur in the process such as
          noise and documentary silence. One of the problems that arise in the
          search for information is whether what we recover is "a lot or a
          little", that is, depending on the type of search, a multitude of
          documents can be recovered or simply a very small number. This
          phenomenon is called Silence or Documentary Noise. <br />
          <br />
          <br />
          <strong>Documentary silence:</strong> Those documents stored in the
          database but that have not been recovered, because the search strategy
          has been too specific or the keywords used are not adequate to define
          the search.
          <br />
          <br />
          <strong>Documentary noise: </strong>Are those documents recovered by
          the system but are not relevant. This usually occurs when the search
          strategy has been defined too genericly. Tools for information
          retrieval: 1) Databases; 2) Internet (electronic journals, thematic
          and multi-thematic search engines, directories, met search engines);
          3) Smart agents; 4) Indices; and 5) Search equations.
        </p>
        <h2 className="article-sub-title">Information Recovery Models</h2>
        <p className="article-text">
          Information retrieval models try to calculate the degree to which a
          given information element responds to a certain query. The three
          classic models and with greater use are:
          <br />
          <br />
          <strong>Boolean:</strong> based on set theory and Boolean algebra.
          Measure the correspondence between the elements of the query and the
          documents.
          <br />
          <br />
          <strong>Vectorial:</strong> it was raised and developed by Gerard
          Salton. Operates through vector algebra. It measures the degree to
          which the vectors that represent the query and the terms of the
          document diverged.
          <br />
          <br />
          <strong>Probabilistic:</strong> it was proposed by Robertson and
          Spark-Jones. It is based on stochastic processes, operations of
          probability theory, and Bayes theorem. The probability in which the
          document responds to the query is calculated. He frequently uses
          feedback with the user.
        </p>
        <h2 className="article-sub-title">
          The Main Problems of Information Retrieval
        </h2>
        <p className="article-text">
          <strong>Information overload:</strong> the increasing volume of
          information on the Web to which users are exposed, and which generates
          problems in the moments of recovering it, since it returns to the user
          a large amount of information that is not relevant and relevant for
          the information query.
          <br />
          <br />
          <strong>Documentary silence:</strong> information not recovered and
          that is relevant. This is because the search strategy has been too
          specific or the keywords used are not adequate to define the search.
          Documentary noise: documents recovered by the system but not relevant.
          It usually occurs when the search strategy has been defined too
          generically.
          <br />
          <br />
          <strong>Lexical phenomena:</strong> Polysemy: when a word has several
          meanings or meanings. Synonymy: two or more different words with the
          same meaning.
        </p>
        <h2 className="article-sub-title">
          Modern Information retrieval techniques
        </h2>
        <p className="article-text">
          <strong>Diffuse logic recovery systems.</strong> It allows queries
          with normal phrases and then the machine only processes the words that
          it considers relevant, not taking into account punctuation marks,
          articles, conjunctions, plurals, verb tenses, common words (which
          usually appear in all documents). The recovery is based on logical
          statements with values of true and false, taking into account the
          location of the word in the document. This technique allows us to
          refine our search because it eliminates punctuation marks, articles,
          conjunctions, plurals, verb tenses, and common words. In this way, the
          system will leave only the keywords increasing the accuracy of the
          search.
          <br />
          <br />
          <strong>Techniques for weighting terms</strong> The weighting gives an
          adequate value to the search criteria, depending on the interests of
          the user; therefore the recovery of information depends on the
          assigned value. The most pertinent search document would be one that
          has all the search terms represented and also the one with the most
          value repeated more times, regardless of where it is located in the
          document. In this method, depending on the terms contained in the
          document and the frequency with which the system is repeated, each
          document will be valued, so it will order them according to its
          greater value.
          <br />
          <br />
          <strong>Clustering technique.</strong> It is a probabilistic model
          that allows the frequencies of the search terms in the retrieved
          documents. Some values (weights) are attributed that act as agents to
          group documents in order of importance, using ranking algorithms. It
          allows the frequency of the search term in the retrieved document. It
          is given some values that act as documentation grouping agents by
          hierarchy and by ranking algorithms. Ranking algorithms represent a
          technique for document retrieval. One of the advantages of this method
          is that it eliminates the need to understand theoretical models, as in
          other algorithms; Ranking algorithms are oriented to the end-user who
          can retrieve information using natural language, another feature is
          that the results are sorted by a Ranking based on co-occurrence of the
          terms of the query.
          <br />
          <br />
          <strong>Feedback techniques by relevance.</strong> After determining
          some search criteria and observing the recovered documents, the query
          is repeated but this time with the interesting elements, selected from
          the documents first recovered. Consists of maintaining the largest
          number of documents establishing different search strategies.
          Determining the search criteria and observing the recovery of
          documents, we repeat the query, but with more specialised terms. In
          this technique the system will carry out two queries, for the first
          query, some search criteria will be established with which documents
          will be obtained, and the second search will be made on the documents
          recovered in the first one, thus making a more exhaustive search.
          <br />
          <br />
          <strong>Stemming techniques.</strong> Eliminates the possible semantic
          confusions that can occur in the search of a concept, for it truncates
          the word and searches only for the root. The recovered documentation
          is based on the value obtained in the approval. The value depends on
          each of the relevant terms contained in the document and the
          repetition frequency. This technique uses the morphology of the words
          instantiated in the search by truncating the prefixes and suffixes
          using different algorithms and leaving only the root, thus eliminating
          the semantic confusion that may occur in the search for the concept.
          <br />
          <br />
          <strong>Linguistic techniques.</strong> They intend to delimit
          efficiently the relevant documents. It achieves this through correct
          indexing in the process of processing documents with the help of
          indexes, thesauri, etc.; avoiding lexical and semantic ambiguities to
          establish consultations. These are some of the most used techniques in
          the recovery of information. There have not been many updates on the
          techniques
        </p>
      </div>
    </div>
  )
}

export default Blog3
