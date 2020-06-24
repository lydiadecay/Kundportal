import React from "react";
import stocks from "../Data/stocks.json";
import "../Styling/App.css";
import download from "../Pictures/download.png";

const style = {
  box: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    background: "#F6FAFB",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 10px",
    background: "#fff",
    flex: 1,
  },
  head: {
    color: "#000",
    textAlign: "left",
    letterSpacing: 0,
    opacity: 1,

    fontFamily: "Poppins",
  },
  body: {
    color: "#000",
    fontFamily: "Poppins",
  },
};

const generateButtons = () => {
  let num = "1234567".split("");
  return num.map((num) => <div style={{ padding: 10 }}>{num}</div>);
};

const Portfolio = () => {
  return (
    <div style={style.box}>
      <span style={{ fontSize: 22, marginBottom: 20, color: "#656565" }}>
        My Portfolio
      </span>
      <div style={style.content}>
        <table className="stocks-table">
          <thead
            style={{
              ...style.head,
              padding: 20,
              borderBottom: "1px solid #eee",
            }}
          >
            <tr>
              <th
                style={{ marginRight: 20, padding: 10 }}
                className="th-company"
              >
                Company
              </th>

              <th
                style={{ marginRight: 40, padding: 10 }}
                className="th-tenancy"
              >
                Tenancy
              </th>

              <th
                style={{ marginRight: 40, padding: 10 }}
                className="th-stocktype"
              >
                Stock type
              </th>

              <th
                style={{ marginRight: 40, padding: 10 }}
                className="th-amount"
              >
                Amount of stocks
              </th>

              <th
                style={{ marginRight: 40, padding: 10 }}
                className="th-stocknumber"
              >
                Stock number
              </th>

              <th style={{ marginRight: 40, padding: 10 }} className="th-share">
                Share
              </th>

              <th className="th-value">Voting value</th>
            </tr>
          </thead>

          {stocks.slice(0, 10).map((stock) => (
            <tbody style={style.body}>
              <tr>
                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  {stock.company}
                </td>

                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  {stock.tenancy}
                </td>

                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  {stock.stockType}
                </td>

                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  {stock.amountOfStocks}
                </td>

                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  {stock.stockNbr}
                </td>

                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  {stock.share}
                </td>

                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  {stock.votingValue}
                </td>
                <td style={{ padding: 10, borderBottom: "1px solid #eee" }}>
                  <img src={download} alt="download" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div style={{ padding: 10 }}>{"<<"} </div>
            <div style={{ padding: 10 }}>{"<"} </div>
            {generateButtons()}
            <div style={{ padding: 10 }}>{">"}</div>
            <div style={{ padding: 10 }}>{">>"}</div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ padding: 10, bordeRadius: 3, background: "yellow" }}>
              10
            </div>
            <div style={{ padding: 10 }}>41-50 av 350</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

/**TO DO:
- last updated
- hoverbox 
- navigate through pages
- buttons for page numbers
- dropdown list for pages
- styling  
*/
