// IMPORTS and DEPENDENCIES
import logo from "./logo.svg";
import "./App.css";
// import the new component
import PersonCard from "./Components/PersonCard";
import PersonCardFunctional from "./Components/PersonCardFunctional";

// COMPONENT DEFINITION
// functional component
function App() {
  // application component code
  // parent component inside which all other components will be organized and rendered

  // ANY VARIABLES
  const appLinkClass = "App-link";
  const myName = "Tristan";

  // RETURNS JSX
  return (
    // our App function returns JSX
    <div className="App">
      {/* this is a JSX comment */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*
          - create a new JSX element h1
          - passed in a dynamic variable value using new syntax { var value }
        */}
        {/* use JSX to display the component */}
        {/* <PersonCard /> */}
        <PersonCardFunctional
          name={"Bootsy"}
          img={"http://placekitten.com/g/200/300"}
          date={new Date()}
        />
      </header>
    </div>
  );
}

// EXPORT THE COMPONENT
export default App;
