import React from "react";
import "./Message.css";

const App = () => {
  const trainingData = [
    {
      title: "今週のトレーニング1",
      種目: [
        {
          name: "ベンチプレス",
          回数: "8RM",
          セット数: "3set",
        },
        {
          name: "スクワット",
          回数: "8RM",
          セット数: "3set",
        },
        {
          name: "デッドリフト",
          回数: "8RM",
          セット数: "3set",
        },
        {
          name: "ランニング",
          回数: "20分",
          セット数: "",
        },
      ],
    },
    {
      title: "今週のトレーニング2",
      種目: [
        {
          name: "ベンチプレス",
          回数: "8RM",
          セット数: "3set",
        },
        {
          name: "スクワット",
          回数: "8RM",
          セット数: "3set",
        },
        {
          name: "デッドリフト",
          回数: "8RM",
          セット数: "3set",
        },
        {
          name: "ランニング",
          回数: "20分",
          セット数: "",
        },
      ],
    },
  ];

  return (
    <div className="msgWrapper">
      <div className="msgContainer">
        <h3 className="header">スタッフより</h3>
        <ul className="training-list">
          {trainingData.map((data, index) => (
            <li className="training-list-item" key={index}>
              <div className="training-list-item-title">{data.title}</div>
              <table>
                {/* <thead>
                  <tr className="table-header">
                    <th>種目</th>
                    <th>回数</th>
                    <th>セット数</th>
                  </tr>
                </thead> */}
                <tbody className="table-content">
                  {data.種目.map((種目, index) => (
                    <tr>
                      <td>{種目.name}</td>
                      <td>{種目.回数}</td>
                      <td>{種目.セット数}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
