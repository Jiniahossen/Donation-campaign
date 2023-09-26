import { NavLink } from "react-router-dom";


const Links = () => {
    return (
        <div >
            <ul className="flex gap-6">
                <li>
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                      }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                      to="/donation"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-red-600 underline" : ""
                      }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                      to="/statistics"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                      }
                    >
                        Statistics
                    </NavLink>
                </li>
                
            </ul>
        </div>
    );
};

export default Links;