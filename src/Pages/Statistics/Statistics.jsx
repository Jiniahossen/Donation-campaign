import  { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Statistics = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    const donationDataString = localStorage.getItem("Donation");

    if (donationDataString) {
      const parsedData = JSON.parse(donationDataString);
      setDonationData(parsedData);
    } else {
      console.log("Data not found in local storage");
    }
  }, []);

  const size = donationData.length;
  const initial = 12;

  const Values = [
    { name: 'Your Donation', value: size },
    { name: 'Total Donation', value: initial },
  ];

  const COLORS = ['#00c49f', '#ff444b'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <ResponsiveContainer  height={400} className={' w-[90%] mx-auto'}>
        <PieChart>
          <Legend
            iconType="circle"
            iconSize={10}
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
          />
          <Pie
            data={Values}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {Values.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
