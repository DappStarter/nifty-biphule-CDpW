require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stomach cruise script attitude hockey civil army gasp'; 
let testAccounts = [
"0x66b361a1e1b1173bb76ac66042aa1d15887f427178417d8b6f593ff2f6e465b9",
"0xe3f7999a86b6859ac8f84f34c848f39fdee5999c4e35e1b3e36f01f77c5b5eb5",
"0xc214a46d737e5adecdb17cec5e0d54588560a9e79228526d3c03ae788196b5a1",
"0x138d0697fec825cd76304df789e2791ed71758e8427b3f94bf6e8707ea4b197c",
"0x79669b7677616ba71e148e30ab062e494f8754459ba731466e82b83280e8231f",
"0x797d12bec14b515c1dac877ddbb2e30766cd4ae31f0b969409a45c615da1539b",
"0x5f2643a453b956e43213d3511da6addb55fdf07edc03cfd5c6b03013d220bd98",
"0x5ec601f2b42110cb3347e8e9fc9e7f53c0897429c529e53c99c2206b6b87ce18",
"0x947249bc2f893dd42e3000c1982cbb2d8c798493137c3226f5726d70ee0db7c9",
"0x8ada3f9bfa1e9912f5acad1670c0262ab8bef2b1be1441b18a24db3f47043026"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

