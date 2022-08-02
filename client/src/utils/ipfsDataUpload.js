const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export const uploadDataIpfs = async(data) => {
    ipfs.addJSON(data, (err, hash) => {
        if (err)
            console.error(err);
        console.log("hash of JSON", hash);
    });
    // ipfs.catJSON('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j').then(console.log).catch(console.log);
}