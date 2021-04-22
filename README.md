# Kickstart

## Quickstart
### How to compile and deploy your contract:
```
npm install
```
Optionally save your own contract in the ```ethereum/contracts``` folder and provide your contract's name as a env variable. If contract is not provided, default contract is ```Campaign.sol```
```
[CONTRACT=YourContact.sol] npm run compile
```
Create a ```.env``` folder and store your own mnemoic as ```MYMNEMONIC```
```
npm run deploy
```
Find the address of your deployed contract in the terminal and check it out at https://rinkeby.etherscan.io/