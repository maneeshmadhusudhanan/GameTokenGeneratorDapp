Game Token Generation DApp

This is a decentralized application (DApp) for generating and managing game tokens. The DApp is built using Hardhat for smart contract development, Node.js and Express.js for the backend, and React.js with HTML and JavaScript for the frontend.

Features

Generate Game Tokens: Allows users to generate a predefined number of game tokens.

Send Tokens: Users can send tokens to another wallet address.

Display Connected Wallet Address: Shows the wallet address currently connected to the DApp.

Display Token Balance: Displays the remaining token balance for the connected wallet.

Technology Stack

Smart Contract Development: Hardhat

Backend: Node.js with Express.js

Frontend: React.js, HTML, and JavaScript

Blockchain Network: Ethereum (can be configured for other EVM-compatible networks)

Installation and Setup

Clone the repository:

git clone <https://github.com/maneeshmadhusudhanan/GameTokenGeneratorDapp>
cd <https://github.com/maneeshmadhusudhanan?tab=repositories>





Install dependencies:

npm install

Compile the smart contracts using Hardhat:

npx hardhat compile

Deploy the smart contracts:

npx hardhat run scripts/deploy.js --network <network_name>

Replace <network_name> with your desired network (e.g., localhost, rinkeby, etc.).

Start the backend server:

node server.js

Start the frontend:

npm start

Usage

Open the DApp in your browser (usually http://localhost:3000 for local development).

Connect your wallet using MetaMask or any Web3-compatible wallet.

Use the provided UI to:

Generate tokens

Send tokens to another address

View the connected wallet address

Check the remaining token balance


Commands

Hardhat Commands

Compile Contracts:

npx hardhat compile

Run Tests:

npx hardhat test

Deploy Contracts:

npx hardhat run scripts/deploy.js --network <network_name>

Backend Commands

Start the Server:

node server.js

Frontend Commands

Start React Development Server:

npm start

Project Structure

|-- contracts/         # Smart contract files
|-- scripts/           # Deployment and utility scripts
|-- backend/           # Node.js and Express.js backend
|-- src/               # React frontend
    |-- components/    # React components
    |-- App.js         # Main React application file
|-- public/            # Static files for frontend
|-- server.js          # Backend server entry point

Prerequisites

Node.js: Install Node.js from nodejs.org.

MetaMask: Install MetaMask for connecting your wallet.

Hardhat: Install Hardhat globally using:

npm install --save-dev hardhat

Notes

Ensure you have funds (ETH) in your wallet for gas fees when interacting with the smart contract.

Configure the .env file with the necessary environment variables such as private keys and RPC URLs for the Ethereum network.

License

This project is licensed under the MIT License.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

Contact

For any queries or feedback, please contact [https://github.com/maneeshmadhusudhanan].

