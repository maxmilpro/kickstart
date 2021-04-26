import Web3 from 'web3';

const ethEnabled = async () => {
  if (typeof window !== 'undefined') {
    await window.ethereum.send('eth_requestAccounts');
    return true;
  }
  return false;
};

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  if (ethEnabled()) {
    web3 = new Web3(window.ethereum);
  }
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/d6146e41bc2c4d95bc825772c9afa676'
  );
  web3 = new Web3(provider);
}

export default web3;

