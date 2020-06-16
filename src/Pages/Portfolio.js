import React from "react";
import stocks from "../Data/stocks.json";

const style = {
  box: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 10px",
    background: "#fff",
    flex: 1,
  },
};

class myStocks extends React.Component {
  state = {
    stocks: [],
  };
}

const Portfolio = () => {
  return (
    <div style={style.box}>
      <span style={{ fontSize: 20, marginBottom: 20 }}>My Portfolio</span>
      <div style={style.content}>
        <div style={{ padding: 20, borderBottom: "1px solid #eee" }}>
          My Portfolio
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

/**TO DO:
- last updated
- table with json elements
- ladda ner aktiebrevet --> array, map, onClick alert, hover box
- navigate through pages
- buttons for page numbers
- dropdown list for pages
- styling  */
