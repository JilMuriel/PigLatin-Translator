import React from "react";
import "./history.styles.scss";
import PigLatin from "piglatin";
class History extends React.Component {
  
  render() {
        const getData = localStorage.getItem("Data");
        const data = JSON.parse(getData);
    return (
      <>
        <div className="history p-container">
          <h2 className="text-orange mb-2">History</h2>
          {data?.map((item, index) => (
            <div key={index} className="history-card">
              <h3>
                <strong>Input: {item}</strong>
              </h3>
              <h3>
                <strong>Translated: {PigLatin(item)}</strong>
              </h3>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default History;
