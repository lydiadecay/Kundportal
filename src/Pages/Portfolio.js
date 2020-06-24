import React from "react";
import stocks from "../Data/stocks.json";
import "../Styling/App.css";
import Button from "../Components/Button";
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
    color: "#A1A8C3",
    textAlign: "left",
    letterSpacing: 0,
    opacity: 1,
    fontWeight: 100,
    fontFamily: "Poppins",
  },
  body: {
    fontWeight: 100,
    color: "#3C3C3B",
    fontFamily: "Poppins",
  },
};

const Portfolio = () => {
  return (
    <div style={style.box}>
      <span style={{ fontSize: 22, marginBottom: 20, color: "#656565" }}>
        My Portfolio
      </span>
      <div style={style.content}>
        <table className="stocks-table">
          <div style={{ padding: 20, borderBottom: "1px solid #eee" }}>
            <thead style={style.head}>
              <tr>
                <th
                  style={{ marginRight: 20, fontWeight: 100 }}
                  className="th-company"
                >
                  Company
                </th>

                <th
                  style={{ marginRight: 40, fontWeight: 100 }}
                  className="th-tenancy"
                >
                  Tenancy
                </th>

                <th
                  style={{ marginRight: 40, fontWeight: 100 }}
                  className="th-stocktype"
                >
                  Stock type
                </th>

                <th
                  style={{ marginRight: 40, fontWeight: 100 }}
                  className="th-amount"
                >
                  Amount of stocks
                </th>

                <th
                  style={{ marginRight: 40, fontWeight: 100 }}
                  className="th-stocknumber"
                >
                  Stock number
                </th>

                <th
                  style={{ marginRight: 40, fontWeight: 100 }}
                  className="th-share"
                >
                  Share
                </th>

                <th style={{ fontWeight: 100 }} className="th-value">
                  Voting value
                </th>
              </tr>
            </thead>
          </div>

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
