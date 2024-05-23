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

async function main() {
    const senderAddress = 'address_here';
    const provider = new ethers.providers.JsonRpcProvider('jsonrpc_url');
    const nonce = await provider.getTransactionCount(senderAddress);
    const contractAddress = await calculateContractAddress(senderAddress, nonce);
    console.log(`Calculated contract address: ${contractAddress}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
