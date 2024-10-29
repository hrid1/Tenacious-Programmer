import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const studentsMarks = [
  { name: "John Smith", math: 85, physics: 78, chemistry: 92 },
  { name: "Emily Johnson", math: 75, physics: 88, chemistry: 79 },
  { name: "Michael Williams", math: 95, physics: 82, chemistry: 85 },
  { name: "Sarah Brown", math: 65, physics: 72, chemistry: 78 },
  { name: "James Jones", math: 70, physics: 80, chemistry: 90 },
  { name: "Olivia Davis", math: 90, physics: 95, chemistry: 94 },
  { name: "David Garcia", math: 78, physics: 85, chemistry: 82 },
  { name: "Sophia Miller", math: 88, physics: 90, chemistry: 86 },
  { name: "William Wilson", math: 82, physics: 84, chemistry: 89 },
  { name: "Isabella Martinez", math: 92, physics: 89, chemistry: 95 }
];

const StudentResult = () => {
  return (
    <ResponsiveContainer className='my-12' width="100%" height={400}>
        <h1 className='text-center'>This one From GPT</h1>
      <LineChart
        width={500}
        height={300}
        data={studentsMarks}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="4 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
        <Line type="monotone" dataKey="chemistry" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StudentResult;
