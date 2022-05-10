require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rifle spike exchange hope ensure bubble tomorrow'; 
let testAccounts = [
"0xac3af8bd68c947ca649c89437caafa4ace45b91c6aa443b9cfd517755bbdb20a",
"0x35580cb964b79dfb4281b4981f2e63dae5111b1449e3503ef1756fe2b7474c5f",
"0xcc801b6e5073927fdfeba721467578c3a16a5dad2ffd8701c47b6cbe06dba06d",
"0xacbe665e3d077897c46f4c9c5300e73d95598595bc1ec321d923d5f3ca1d6b3a",
"0x64d5a652a0fd50e8b05ef5e0cb2bc1547d33f2e58c59feb4fc5a5e1dfd0504c0",
"0x21f49fac417171e6b9fd78760405c9d00a869099ffb95dc82386031c51c80dd5",
"0x720d0dbeb80e05f79e7e7b3b7261798791ce86fc83dd1ed64801941fefec9536",
"0xf697b59b34ee06febee56d62be7f8b09cadfa4a16630993c88574d37eac4cab3",
"0x2c5051b56784410ed3648e445c1906943087cee90a52c438c11036f9e5db9b8c",
"0x704d2756074755839a5702c4f51be1ee0febc7b6c799642e2175252ca1bfb3ad"
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

