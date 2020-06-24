import React from "react";

const Table = ({
  company,
  tenancy,
  stockType,
  amountOfStocks,
  stockNbr,
  share,
  votingValue,
}) => {
  return (
    <div>
      <tr>
        <td>{company}</td>
      </tr>
      <tr>
        <td>{tenancy}</td>
      </tr>
      <tr>
        <td>{stockType}</td>
      </tr>
      <tr>
        <td>{amountOfStocks}</td>
      </tr>
      <tr>
        <td>{stockNbr}</td>
      </tr>
      <tr>
        <td>{share}</td>
      </tr>
      <tr>
        <td>{votingValue}</td>
      </tr>
    </div>
  );
};

export default Table;
