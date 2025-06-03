# Digital Land Record System – Frontend

The Digital Land Record System, built with **React** and **Vite**. It provides a user interface for interacting with the Land Registry smart contract.

## Features

- **Register Land:** Users can register new land records on the blockchain.
- **Transfer Ownership:** Landowners can transfer ownership of their land to another address.
- **Web3 Integration:** Connects to MetaMask for blockchain transactions.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

4. **Connect MetaMask:**
   Make sure MetaMask is installed and connected to the correct network.

## Notes

- The contract address in `src/web3.js` must match your deployed LandRegistry contract.
- Requires the backend smart contracts to be deployed and accessible.

## Tech Stack

- React 19
- Vite
- Web3.js

---