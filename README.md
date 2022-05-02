# MEV.gg

[mev.gg](http://mev.gg) is a MEV game. The game works like Fomo3d.

`MevGG` is a single smart contract that does the following:

There is a countdown clock starting at 24 hours.

You can purchase a key for ETH (current price is .05 ETH, subject to change)

Every time a key is purchased, a few things happen

1. 1% of the ETH goes to the devs
2. 49.5% of ETH goes to the jackpot
3. 49.5% goes to all previous key purchasers, in proportion to the number of keys they have bought / total keys purchased
4. The countdown clock adds 30 seconds

If you were the last person to buy a key when the countdown clock hits zero, you win the jackpot

This is a MEV game because its all about watching the mempool and frontrunning or backrunning key purchases.

Buying keys early gives a high chance of payout if the game gets successful, and buying keys towards the end gives you a good chance of winning the jackpot. The incentives align to create a truly huge jackpot.


## TODO
Mason (and/or Sam):
- [X] Fix infinte claim divvies bug
- [ ] Create a sample MEV bot to buy keys in front of the clock hitting zero. Display this code on the mev.gg website
- [ ] Write FAQ
- [ ] Create Twitter, Discord
- [ ] Make sure art displays on OpenSea (currently not rendering on testnets.opensea.io, not sure why)


Bill:
- [X] claimDivvies
- [X] Fix key purchase bug
- [ ] Display NFT(s) after purchase
- [ ] Display claimable Divvies and token ID in SVG
- [ ] Show FAQ
- [ ] Show MEV bot code
- [ ] Link to contracts, OpenSea, Discord
- [ ] Performance issues
- [ ] Claimable divvies updates after purchase confirmation, but the jackpot doesn't
- [ ] Countdown clock shows hours and seconds
- [ ] Show "Connect wallet" button and modal instead of game over toggle
- [ ] Show when a transaction is pending and confirmed (maybe a key unlocking animation? Would be kind of cool)
- [ ] Mobile support
- [ ] Favicon