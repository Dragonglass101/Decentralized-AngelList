const IPFS_MINI = require('ipfs-mini');
const ipfs_mini = new IPFS_MINI({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default ipfs_mini;