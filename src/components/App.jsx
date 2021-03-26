import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";
import ContentData from "../data/content.json";

function App() {
  const [titleId, setTitleId] = useState("Industries");

  function updateTitle(newtitle) {
    setTitleId(newtitle);
    //console.log(newtitle);
  }

  return (
    <div
      style={{
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundImage:
          titleId === "Industries"
            ? 'url("images/slide_one.jpg")'
            : titleId === "Services"
            ? 'url("images/slide_two.jpg")'
            : titleId === "About Us"
            ? 'url("images/slide_three.jpg")'
            : null
      }}
    >
      <div className="main">
        {" "}
        <Main onAdd={updateTitle} />
      </div>

      {/* <Footer cta={ContentData[0].blocks[0].cta} /> */}

      {titleId === "Industries" ? (
        <Footer cta={ContentData[0].blocks[0].cta} />
      ) : titleId === "Services" ? (
        <Footer cta={ContentData[1].blocks[0].cta} />
      ) : (
        <Footer cta={ContentData[2].blocks[0].cta} />
      )}
    </div>
  );
}

export default App;
