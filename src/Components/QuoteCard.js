import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteCard = ({ selectedQuote, handleClick }) => {
  let quote = selectedQuote.quote;
  const author = selectedQuote.author;
  const regex = /^\d*\./;
  if (regex.test(quote)) {
    quote = quote.replace(regex, "");
  }
  return (
    <>
      <div id="newQuote">
        <h1 id="text">{quote ? `"${quote}"` : ""}</h1>
        <h3 id="author">{author ? author : ""}</h3>
      </div>
      <Button displayName={"Next Quote"} onClick={handleClick} />
      <a
        id="tweet-quote"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text="${quote}"-${author}`
        )}
      >
        <FontAwesomeIcon
          id="twitterIcon"
          icon={faTwitter}
          size="lg"
        ></FontAwesomeIcon>
      </a>
    </>
  );
};

// const QuoteCard = (props) => {
//   const author = props.selectedQuote.author;
//   let quote = props.selectedQuote.quote;
//   const handleClick = props.handleClick;
//   const regex = /^\d*\./;
//   if (regex.test(quote)) {
//     quote = quote.replace(regex, "");
//   }
//   return (
//     <>
//       <div id="newQuote">
//         <h1 id="text">{quote ? `"${quote}"` : ""}</h1>
//         <h3 id="author">{author ? author : ""}</h3>
//       </div>
//       <Button displayName={"Next Quote"} onClick={handleClick} />
//       <a
//         id="tweet-quote"
//         href={encodeURI(`https://twitter.com/intent/tweet?text="${quote}"-${author}`)}
//       >
//         <FontAwesomeIcon
//           id="twitterIcon"
//           icon={faTwitter}
//           size="lg"
//         ></FontAwesomeIcon>
//       </a>
//     </>
//   );
// };

export default QuoteCard;
