// src/components/Home.js
import React from "react";

export default function Home() {
  const containerStyle = {
    backgroundImage: 'url("/images/iii.jpg")', 
    backgroundSize: "cover",
    // backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    height: "90vh",
    width: "99vw",
    display: "flex",

    // borderRadius: '5px',
    overflow: "hidden", 
    color: "white",
    justifyContent: "space-between",
  };

  const textstyle = {
    marginLeft: "20px",
    marginTop: "25px",
    fontSize: "10px",
    display: "flex",
    flexDirection: "column",
  };

  const homestyle = {
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    paddingRight: "40px",
  };

  // const footstyle={
 
  // }

  return (
    <>
      <div style={containerStyle}>
      
        <div style={textstyle}>
          <p>GOOGLE DEVELOPER STUDENT CLUB</p>
          <h1>ANJUMAN-I-ISLAM'S</h1>
          <br />
          <h1>KALSEKAR TECHNICAL</h1>
          <br />
          <h1>CAMPUS.</h1>
        </div>

        <div style={homestyle}>
          <h1>JOIN OUR</h1>
          <br />
          <h1>CHAPTER AT AIKTC</h1>
        </div>

      
          {/* <footer style={footstyle}>
          <h6>
            Google Developer Student Club (GDSC) is for our campus hub for tech
            exploration. Learn mobile & web Development design thinking, and leadership skill through workshop, events and a
            global community
          </h6>
          
          </footer> */}
          
        
      </div>
    </>
  );
}
