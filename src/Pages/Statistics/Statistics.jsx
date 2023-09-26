import  { useEffect, useState } from "react";


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

  const size=(donationData.length);
  const initial=12;

  return (
    <div>

    </div>
  );
};

export default Statistics;
