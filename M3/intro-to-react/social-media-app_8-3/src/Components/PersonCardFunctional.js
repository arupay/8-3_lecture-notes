<<<<<<< HEAD
const PersonCardFunctional = (props) => {
=======
// Create a functional DISPLAY COMPONENT
const PersonCardFunctional = (props) => {
  // destructure (or unpack) props into variables
>>>>>>> 08cc80581a8d89fa93dfa2d1493429b012788b53
  const { name, img, date } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Up to date as of: {date.getMonth()}/{date.getDay()}/{date.getFullYear()}
      </p>
      <img src={img} />
<<<<<<< HEAD
      <Profile />
=======
>>>>>>> 08cc80581a8d89fa93dfa2d1493429b012788b53
    </div>
  );
};

export default PersonCardFunctional;
