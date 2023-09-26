import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import DonationCategories from "../../Components/DonationCategories/DonationCategories";


const Home = () => {

    const categoriesItem=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className=" max-w-6xl mx-auto pt-10 pb-6">
            <DonationCategories categoriesItem={categoriesItem}></DonationCategories>
            </div>
        </div>
    );
};

export default Home;