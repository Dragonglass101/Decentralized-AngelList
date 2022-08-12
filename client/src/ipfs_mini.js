const IPFS_MINI = require('ipfs-mini');
const ipfs_mini = new IPFS_MINI({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', auth: "2DCiB27K1otGx8J3ajAYpxBiH7u:8608a457fb1458cccad34984fd90434c" });

export default ipfs_mini;