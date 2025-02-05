import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center justify-center">
        <div>
            <h1 className="sr-only">Las recetas de La Nona</h1>
            <img src="/Logo.svg" alt="Logo Las recetas de La Nona" className="max-w-40 max-h-40 my-4 "/>
        </div>
        </Link>
    );
};

export default Logo;
