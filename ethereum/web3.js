import Web3 from 'web3';

const ethEnabled = async () => {
  if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    return true;
  }
  return false;
};

let web3;

if (ethEnabled()) {
  web3 = new Web3(window.ethereum);
}

export default web3;
