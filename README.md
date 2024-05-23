# Contract Address Calculator

Hey there! 👋 Welcome to my little project where I'm playing around with Ethereum contract addresses. This repo has a couple of scripts that help you calculate and find vanity contract addresses.

## What's Inside?

### index.js
This is the basic script. It calculates the contract address based on the sender's address and nonce. Just plug in your sender address and the URL of your JSON-RPC provider, and it'll spit out the contract address for you.

### Vanity.js
This one's a bit more fun. It's a script that tries to find a contract address that matches a certain pattern. For example, you can look for addresses that start with three zeros. It keeps trying different nonces until it finds a match.

## How to Use

1. Clone this repo to your machine.
2. Make sure you have Node.js installed.
3. Install the `ethers` library by running `npm install ethers` or basicall `npm install`.
4. Replace `'address_here'` and `'jsonrpc_url'` with your actual sender address and provider URL.
5. Run the scripts with `node index.js` or `node Vanity.js`.

That's it! Feel free to tweak the code and have fun with it. If you have cool ideas, don't hesitate to open an issue or a pull request.

FYI THIS IS NOT AN OPTIMISED WAY TO FIND/CREATE A VANITY CONTRACT ADDRESS

Happy coding! 😊
