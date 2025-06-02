import Web3 from "web3";
import LandRegistryABI from "./LandRegistry.json"; // Ensure the ABI is in `src/`

const web3 = new Web3(window.ethereum); // Connect to MetaMask
const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; // Replace with deployed contract address
const landRegistry = new web3.eth.Contract(LandRegistryABI, contractAddress);

export { web3, landRegistry };
