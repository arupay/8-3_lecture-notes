const PersonCardFunctional = (props) => {
  const { name, img, date } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Up to date as of: {date.getMonth()}/{date.getDay()}/{date.getFullYear()}
      </p>
      <img src={img} />
      <Profile />
    </div>
  );
};

export default PersonCardFunctional;
