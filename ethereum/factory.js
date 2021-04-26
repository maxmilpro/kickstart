import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0x1cF74EBAAb1ff9a82132F309E65E3B6c1E729A8c'
);

export default instance;
