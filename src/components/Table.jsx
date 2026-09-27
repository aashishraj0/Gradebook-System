import React, { useState } from 'react';
let data = require("./data.json")



export default function StudentTable() {
  const [showPassing, setShowPassing] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchQuery, setSearchQuery] = useState('');


  const handlePassingClick = () => {
    setShowPassing(true);
  };
  
  const handleFailingClick = () => {
    setShowPassing(false);
  };

  const handleResetClick = () => {
    setShowPassing(null);
    setSortConfig({ key: null, direction: null });
  };
  
  

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.direction === 'ascending' && sortConfig.key === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortConfig.direction === 'descending' && sortConfig.key === 'name') {
      return b.name.localeCompare(a.name);
    }
    if (sortConfig.direction === 'ascending' && sortConfig.key === 'id') {
      return a.id - b.id;
    }
    if (sortConfig.direction === 'descending' && sortConfig.key === 'id') {
      return b.id - a.id;
    }
    if (sortConfig.direction === 'ascending' && sortConfig.key === 'final_grade') {
      return (0.6 * a.exam_grade + 0.4 * a.rating_grade) - (0.6 * b.exam_grade + 0.4 * b.rating_grade);
    }
    if (sortConfig.direction === 'descending' && sortConfig.key === 'final_grade') {
      return (0.6 * b.exam_grade + 0.4 * b.rating_grade) - (0.6 * a.exam_grade + 0.4 * a.rating_grade);
    }

    return 0;
  });

  const filteredStudents = showPassing === true
    ? sortedData.filter(
        student => (student.exam_grade * 0.6 + student.rating_grade * 0.4) >= 4
      )
    : showPassing === false
      ? sortedData.filter(
          student => (student.exam_grade * 0.6 + student.rating_grade * 0.4) < 4
        )
      : sortedData.filter(
student => student.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div class="container">
      <button class="all-btn" onClick={handleResetClick}>All</button>
      <button class="pass-btn" onClick={handlePassingClick}>Pass</button>
      <button class="fail-btn" onClick={handleFailingClick}>Fail</button>
      <input type="text" class="search" placeholder="Search by name..." onChange={handleSearch} />
<table>
<thead>
<tr>
<th onClick={() => requestSort('id')} className={getClassNamesFor('id')}>
ID
</th>
<th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>
Name
</th>
<th>Ticket Number</th>
<th>Ticket Topic</th>
<th>
Exam Grade
</th>
<th>
Rating Grade
</th>
<th onClick={() => requestSort('final_grade')} className={getClassNamesFor('final_grade')}>Final Grade</th>
<th>Status</th>

</tr>
</thead>
<tbody>
{filteredStudents.map((student) => (
  <tr key={student.id} onClick={() => setSelectedStudent(student)} className={selectedStudent === student ? 'selected-row' : ''}>
<td>{student.id}</td>
<td className={selectedStudent === student ? 'selected' : ''}>
        {selectedStudent === student ? student.name.toUpperCase() : student.name}
      </td>
<td>{student.ticket_number}</td>
<td>{student.ticket_topic}</td>
<td>{student.exam_grade}</td>
<td>{student.rating_grade}</td>
<td>{(0.6 * student.exam_grade + 0.4 * student.rating_grade).toFixed(2)}</td>
<td>{0.6 * student.exam_grade + 0.4 * student.rating_grade > 4 ? 'Pass' : 'Fail'}</td>

</tr>
))}
</tbody>
</table>

</div>
);
}