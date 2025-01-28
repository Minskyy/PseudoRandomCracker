# PseudoRandomCracker
This project allowed me to exploit the lottery mechanism of some smart contracts by cracking their pseudo-random number solution.

One of them was  [1uck](https://bscscan.com/token/0x30016a1764c93eedccbee5e1b3835f191c6f4050), which generated their solution from an equation which had 3 different pseudo-random numbers as inputs.

These numbers could be retrieved by continously scanning the blockchain to monitor the smart contract's transactions and keeping track of it's current state. That's what this project is doing.

Then, with the solution in hand, a transaction needs to be made at a very precise timestamp (down to 1-2s of margin) in order to crack the function in the smart contract which sends the lottery proceeds to the caller's wallet.

I'm keeping the main part of the program private (but the tools I make available here are enough for you to give it a try)

Ping me if you need help!

