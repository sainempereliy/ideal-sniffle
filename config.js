const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        algo: 'rx/0',
        user: 'ZEPHsCXoSCxbM3ZTS2NaEvZ4ummTZ9kxQHgvFE2Wn5nmcLGUhzziXWi486UMoNKoqQDNFUZTk1rC2e1V57R3GovCeoyhWRt837K',
        url: 'us.zephyr.herominers.com:1123', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner
// miner.stop() // manually stop the miner
