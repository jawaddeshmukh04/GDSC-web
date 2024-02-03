import React from "react";

export default function About() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    background: "black",
    color: "white",
    
  };

  const abstyle = {
    // backgroundImage: 'url("./images/images.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // maxWidth: "100vh",
    // height: "30rem",
    //  width: "10rem",
    // height: "95vh",
    // width: "100vw",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    // marginLeft: '30px'
  };

  const headerStyle = {
    marginBottom: "10px",
    marginLeft:'20px'
  };

  const buttonStyle = {
    alignSelf: "flex-end",
    marginTop: "-40px",
    marginRight:'20px',
    marginBottom:'20px'
    // color: "black",
  };

  const textContainerStyle = {
    // textAlign: "self",
    // maxWidth: "100vh",
    // paddingLeft: '50%'
  };

  const textstyle={
    marginLeft:'400px',
    marginTop:'50px',

    fontSize:'20px'
  }

  const textsstyle={
    marginLeft:'400px',
    marginTop:'100px'

  }
  return (
    <div className="abb my-3" style={containerStyle}>
      <p>About</p>
      <h3 style={headerStyle}>GOOGLE DEVELOPER STUDENT CLUB</h3>
      <button
        type="button"
        className="btn btn-outline-light"
        style={buttonStyle}
      >
        Keep More
      </button>
      <div style={abstyle}>

        <div style={textContainerStyle}>
          <h6  style={textsstyle}>Introduction</h6>
          <p style={textstyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            rem nemo incidunt nisi praesentium fugit alias, quibusdam porro,
            placeat asperiores dolores. Itaque omnis deserunt ex tenetur illum
            quo ratione? Minus.
          </p>
          <h6  style={textsstyle}>Introduction</h6>
          <p style={textstyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            rem nemo incidunt nisi praesentium fugit alias, quibusdam porro,
            placeat asperiores dolores. Itaque omnis deserunt ex tenetur illum
            quo ratione? Minus.
          </p>
        </div>
      </div>
    </div>
  );
}
