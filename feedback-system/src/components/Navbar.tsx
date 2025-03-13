import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
            <Link to="/summary">Summary</Link>
        </nav>
    );
};

export default Navbar;
