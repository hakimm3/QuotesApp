import React, { useEffect, useState } from "react";
import twitterLogo from "../assets/Twitter-logo -blue.png"

export default function Card() {
  const [quoteData, setQuoteData] = React.useState({});
  const [quote, setQuote] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  });

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setQuoteData(data);
    }
    getData();
  }, []);

  function setQuotes(){
    const random = Math.floor(Math.random() * quoteData.length);
    setQuote({
      text: quoteData[random].text,
      author: quoteData[random].author
    });
  }

  return (
    <div className="card" id="quote-box">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p id="text">
           {quote.text}
          </p>
          <footer className="blockquote-footer text-end" id="author">
            {quote.author}
          </footer>
        </blockquote>
      </div>
      <div className="card-footer">
        <div className="row justify-content-arround">
          <div className="col-6 text-start">
            <a target="_blank" href={'https://twitter.com/intent/tweet?text=' + quote.text} className="btn btn-dark" id="tweet-quote">
              <img src={twitterLogo} width="30px" alt="Twitter Logo" title="Share this Quote" />
            </a>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-success" id="new-quote" onClick={setQuotes}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
