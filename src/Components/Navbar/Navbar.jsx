import Links from "../Links/Links";
import Logo from "../Logo/Logo";


const Navbar = () => {
    return (
        <div className="  items-center md:flex md:justify-between max-w-5xl mx-auto pt-4 px-4">
            <div>
                <Logo></Logo>
            </div>
            <div className=" text-lg">
                <Links></Links>
            </div>
            
        </div>
    );
};

export default Navbar;