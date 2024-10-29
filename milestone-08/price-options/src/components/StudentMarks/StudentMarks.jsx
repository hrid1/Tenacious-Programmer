import { LineChart, Line, XAxis, YAxis } from "recharts";

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
  { name: "Isabella Martinez", math: 92, physics: 89, chemistry: 95 },
];

const StudentMarks = () => {
  return (
    <div>
      <LineChart width={800} height={400} data={studentsMarks}>
        {/* <Line type="monotone" dataKey={math} stroke="red"></Line> */}
        <Line type="monotone" dataKey="math"  stroke="red"></Line>
        <Line type="monotone" dataKey="physics"  stroke="green"></Line>
        <Line type="monotone" dataKey="chemistry"  stroke="blue"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default StudentMarks;
