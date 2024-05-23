
const ethers = require('ethers');
const { keccak256, RLP } = ethers.utils;

async function calculateContractAddress(senderAddress, nonce) {
    const senderAddressLower = senderAddress.toLowerCase();
    const rlpEncoded = RLP.encode([senderAddressLower, ethers.BigNumber.from(nonce).toHexString()]);
    const contractAddressLong = keccak256(rlpEncoded);
    // Contract address is the last 20 bytes of the hash
    const contractAddress = `0x${contractAddressLong.slice(-40)}`;
    return contractAddress;
}

async function findMatchingNonce(senderAddress, provider, pattern) {
    let nonce = await provider.getTransactionCount(senderAddress);
    while (true) {
        const contractAddress = await calculateContractAddress(senderAddress, nonce);
        console.log(`Attempt with nonce ${nonce}: ${contractAddress}`);
        if (pattern.test(contractAddress)) {
            console.log(`Found matching address: ${contractAddress} with nonce: ${nonce}`);
            return nonce;
        }
        nonce++;
    }
}

async function main() {
   const senderAddress = 'address_here';
    const provider = new ethers.providers.JsonRpcProvider('jsonrpc_url');
    const pattern = /^0x0{3}/; // Adjust this regex to change the pattern (3 leading zeros) if you want to have a contract address with 0x000(3 zero starting ) 

    const matchingNonce = await findMatchingNonce(senderAddress, provider, pattern);
    console.log(`Matching nonce: ${matchingNonce}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
