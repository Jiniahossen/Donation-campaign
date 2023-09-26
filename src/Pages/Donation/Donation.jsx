import { useEffect, useState } from "react";
import Donationcard from "./Donationcard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noDonation, setNoDonation] = useState("");
    const [showAll, setShowAll] = useState(false); 

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('Donation'));
        if (donationItems) {
            setDonation(donationItems);
        } else {
            setNoDonation("You have not donated yet!");
        }
    }, []);

    const handleSeeAll = () => {
        
        setShowAll(!showAll);
    };

    return (
        <div>
            <div>
                {noDonation ? (
                    <p className="flex justify-center mt-20 text-2xl">{noDonation}</p>
                ) : (
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20 max-w-7xl mx-auto">
                            {donation.slice(0, showAll ? donation.length : 4).map(donations => (
                                <Donationcard key={donations.id} donations={donations}></Donationcard>
                            ))}
                        </div>
                    </div>
                )}
            </div>
         
            {donation.length > 4 && !showAll && (
                <div className="text-center items-center mt-20">
                    <button className="bg-green-700 text-white px-4 py-2 rounded-md" onClick={handleSeeAll}>
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Donation;
