import React, { useEffect } from "react";
import { getDog, fetchFail } from "../actions";
import { connect } from "react-redux";
import "../App.css";

const Dog = (props) => {
  const { isFetching, error } = props;
  const name = props.name;
  useEffect(() => {
    props.getDog();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching dog for ya!</h2>;
  }

  const handleClick = () => {
    props.getDog();
  };

  return (
    <>
    
      <div className="ClassyDog">
        
        <div></div>
        {/* <button className="goodboy" onClick={handleClick}>
          Get new dog
        </button> */}
        <button class="bone" onClick={handleClick}>
    <div class="c1"></div>
    <div class="c2"></div>
    <div class="c3"></div>
    <div class="c4"></div>
    <div class="b1">
      <div class="b2">
        Fetch
      </div>
    </div>
</button>
        <h2>Dog image Generator</h2>
        <img className="rotate" src={name} alt="A randomly generated dog" />
      </div>
        <button
          className="goodboy"
          onClick={() => {
            props.fetchFail("Pressed the Error button!!!");
          }}
        >
          {" "}
          Error Button
        </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getDog, fetchFail })(Dog);
