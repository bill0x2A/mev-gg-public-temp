# MEV.gg

[mev.gg](http://mev.gg) is a MEV game. The game works like Fomo3d.

[MEV.gg](http://MEV.gg) is a single smart contract that does the following:

There is a countdown clock starting at 24 hours.

You can purchase a key for ETH, starting at .01 ETH

Every time a key is purchased, a few things happen

1. The key price increases by a tiny amount - starting at 1%, and tapering off to 0.2%
2. 1% of the ETH goes to the devs
3. 49.5% of ETH goes to the jackpot
4. 49.5% goes to all previous key purchasers, in proportion to the number of keys they have bought / total keys purchased
5. The countdown clock adds 30 seconds

If you were the last person to buy a key when the countdown clock hits zero, you win the jackpot

This is a MEV game because its all about watching the mempool and frontrunning or backrunning key purchases.

Buying keys early gives a high chance of payout if the game gets successful, and buying keys towards the end gives you a good chance of winning the jackpot. The incentives align to create a truly huge jackpot. 