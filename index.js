const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`${className}`}>
      <p className="x">{text}</p>
    </div>
  );
};

const element = (
  <div className="xx">
    <h1>Boxes</h1>
    <div className="x">
      <Box className="b1" text="Small" />
      <Box className="b2" text="Medium" />
      <Box className="b3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
