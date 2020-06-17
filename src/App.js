import React, { useState, useEffect } from "react";
import "./App.css";
import QuoteCard from "./Components/QuoteCard";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
      );
      const quotes = await data.json();
      setQuotes(quotes);
      setIndex(Math.floor(Math.random() * quotes.length));
    }
    fetchData();
  }, []);

  // useEffect(async () => {
  //   const data = await fetch(
  //     "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
  //   );
  //   const quotes = await data.json();
  //   setQuotes(quotes);
  //   setIndex(Math.floor(Math.random() * quotes.length));
  // }, []);

  function getSelectedQuote() {
    if (!quotes.length || !Number.isInteger(index)) {
      return "";
    }
    return quotes[index];
  }

  function determineIndex() {
    if (!quotes.length) {
      return;
    }
    return Math.floor(Math.random() * quotes.length);
  }

  function handleClick() {
    setIndex(determineIndex());
  }

  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        <QuoteCard
          selectedQuote={getSelectedQuote()}
          handleClick={handleClick}
        />
      </header>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quotes: [],
//       index: null,
//     };
//   }
//   componentDidMount() {
//     fetch(
//       "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
//     )
//       .then((data) => data.json())
//       .then((quotes) =>
//         this.setState({ quotes }, () => {
//           this.setState({ index: this.determineIndex() });
//         })
//       );
//   }
//   determineIndex() {
//     const quotes = this.state.quotes;
//     if (!quotes.length) {
//       return;
//     }
//     return Math.floor(Math.random() * quotes.length);
//   }

//   get selectedQuote() {
//     const quotes = this.state.quotes;
//     const index = this.state.index;
//     if (!quotes.length || !Number.isInteger(index)) {
//       return "";
//     }
//     return quotes[index];
//   }

//   handleClick() {
//     this.setState({
//       index: this.determineIndex(),
//     });
//   }

//   render() {
//     const selectedQuote = this.selectedQuote;
//     return (
//       <div className="App" id="quote-box">
//         <header className="App-header">
//           <QuoteCard
//             selectedQuote={selectedQuote}
//             handleClick={this.handleClick.bind(this)}
//           />
//         </header>
//       </div>
//     );
//   }
// }

export default App;
