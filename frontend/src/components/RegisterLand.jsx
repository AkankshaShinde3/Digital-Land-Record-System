import React, { useState } from "react";
import { web3, landRegistry } from "../web3";

const RegisterLand = () => {
    const [location, setLocation] = useState("");
    const [area, setArea] = useState("");

    const registerLand = async () => {
        const accounts = await web3.eth.requestAccounts();
        await landRegistry.methods.registerLand(location, area).send({ from: accounts[0] });
        alert("Land Registered Successfully!");
    };

    return (
        <div>
            <h2>Register Land</h2>
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="number" placeholder="Area (sq ft)" value={area} onChange={(e) => setArea(e.target.value)} />
            <button onClick={registerLand}>Register</button>
        </div>
    );
};

export default RegisterLand;
