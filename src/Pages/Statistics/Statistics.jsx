import  { useEffect, useState } from "react";

import ShowPeiChart from "./ShowPeiChart";

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

  return (
    <div>
        {
            donationData.map(data=><ShowPeiChart key={data.id} data={data}></ShowPeiChart>)
        }
    </div>
  );
};

export default Statistics;
