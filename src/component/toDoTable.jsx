import React from "react";

const ToDoTable = ({tasks})=> {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>desc</th>
          </tr>
          {tasks.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.desc}</td>
                <td>
                  <button>Del</button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};

export default ToDoTable;