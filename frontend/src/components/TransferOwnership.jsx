import React, { useState } from "react";
import { web3, landRegistry } from "../web3";

const TransferOwnership = () => {
    const [landId, setLandId] = useState("");
    const [newOwner, setNewOwner] = useState("");

    const transferOwnership = async () => {
        const accounts = await web3.eth.requestAccounts();
        await landRegistry.methods.transferOwnership(landId, newOwner).send({ from: accounts[0] });
        alert("Ownership Transferred!");
    };

    return (
        <div>
            <h2>Transfer Ownership</h2>
            <input type="number" placeholder="Land ID" value={landId} onChange={(e) => setLandId(e.target.value)} />
            <input type="text" placeholder="New Owner Address" value={newOwner} onChange={(e) => setNewOwner(e.target.value)} />
            <button onClick={transferOwnership}>Transfer</button>
        </div>
    );
};

export default TransferOwnership;
