require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  process.env.MYMNEMONIC,
  'https://rinkeby.infura.io/v3/d6146e41bc2c4d95bc825772c9afa676'
);

const web3= new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account: ', accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ from: accounts[0], gas: '5000000'});

  console.log(compiledFactory.abi);
  console.log('Contract deployed to: ', result.options.address);
}
deploy();
