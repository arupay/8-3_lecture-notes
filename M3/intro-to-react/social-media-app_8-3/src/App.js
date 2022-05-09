// IMPORTS and DEPENDENCIES
import logo from "./logo.svg";
import "./App.css";
// import the new component
<<<<<<< HEAD
import PersonCard from "./Components/PersonCard";
import PersonCardFunctional from "./Components/PersonCardFunctional";
=======
import PersonCard from './Components/PersonCard';
import PersonCardFunctional from './Components/PersonCardFunctional';
>>>>>>> 08cc80581a8d89fa93dfa2d1493429b012788b53

// COMPONENT DEFINITION (Container component)
// functional component
function App() {
  // application component code
  // parent component inside which all other components will be organized and rendered

  // Make an api call

  // Or pass in some iterable data (array of objects)
  const people = [
    {
      name: 'Bootsy',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Cinders',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Shadow',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Twinkle',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Angel',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Neko',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Minx',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Loopy',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Loky',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'Mittens',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
    {
      name: 'ChiChi',
      date: new Date(),
      img: 'http://placekitten.com/g/200/300',
    },
  ];

  // ANY VARIABLES
<<<<<<< HEAD
  const appLinkClass = "App-link";
  const myName = "Tristan";
=======

  // Iterate through our people list, and create a new list of display components
  let counter = 0;
  const peopleList = people.map((person) => {
    counter++;

    // fetch request to get a new cat img for each cat

    // we construct each display component instance
    // using data from our object
    // passing the data as props to the component
    return (
      <PersonCardFunctional
        name={person.name}
        img={person.img}
        date={person.date}
        key={counter}
      />
    );
  });
>>>>>>> 08cc80581a8d89fa93dfa2d1493429b012788b53

  // RETURNS JSX
  return (
    // our App function returns JSX
    <div className="App">
      {/* this is a JSX comment */}
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
=======
      <div className='people'>
>>>>>>> 08cc80581a8d89fa93dfa2d1493429b012788b53
        {/*
          - create a new JSX element h1
          - passed in a dynamic variable value using new syntax { var value }
        */}
        {/* use JSX to display the component */}
<<<<<<< HEAD
        {/* <PersonCard /> */}
        <PersonCardFunctional
          name={"Bootsy"}
          img={"http://placekitten.com/g/200/300"}
          date={new Date()}
        />
      </header>
=======
        <PersonCard
          name={people[10].name}
          img={people[10].img}
          date={people[10].date}
        />
        {/* <PersonCardFunctional
          name={'Bootsy'}
          img={'http://placekitten.com/g/200/300'}
          date={new Date()}
        /> */}
        {/* <ul>{peopleList}</ul> */}
      </div>
>>>>>>> 08cc80581a8d89fa93dfa2d1493429b012788b53
    </div>
  );
}

// EXPORT THE COMPONENT
export default App;
