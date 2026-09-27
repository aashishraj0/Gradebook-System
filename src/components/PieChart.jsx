import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar } from 'recharts';
import data from './data.json';

const PieChartGraph = () => {
  const [showGraphs, setShowGraphs] = useState(false);

  const toggleGraphs = () => {
    setShowGraphs(!showGraphs);
  };

  const finalGradeData = data.map(student => ({ name: student.name, final_grade: (0.6 * student.exam_grade + 0.4 * student.rating_grade).toFixed(2) }));

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="graph-container">
      <button className="graph-toggle-btn" onClick={toggleGraphs}>
        {showGraphs ? "Hide Graphs" : "Show Graphs"}
      </button>
      {showGraphs && (
        <div className="graphs-wrapper">
          <div className="graph">
            <h3>Exam Grades</h3>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="exam_grade"
                data={data}
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="graph">
            <h3>Final Grades</h3>
            <BarChart width={600} height={400} data={finalGradeData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="final_grade" fill="#007bff" />
            </BarChart>
          </div>
          <div className="graph">
            <h3>Rating Grades</h3>
            <LineChart width={600} height={400} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rating_grade" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default PieChartGraph;
