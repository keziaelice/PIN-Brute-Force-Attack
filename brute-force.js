const crypto = require('crypto');

// The hashed PIN from the database
const hashedPIN = '5531a5834816222280f20d1ef9e95f69';

// Function to brute-force the PIN
function bruteForcePIN() {
    for (let i = 0; i <= 9999; i++) {
        // Pad numbers with leading zeros to ensure they are 4 digits
        const pin = i.toString().padStart(4, '0');
        const hash = crypto.createHash('md5').update(pin).digest('hex');
        if (hash === hashedPIN) {
            return pin; // PIN found
        }
    }
    return null; // PIN not found
}

// Execute the brute-force attack
const alicePIN = bruteForcePIN();
if (alicePIN) {
    console.log(`Alice's PIN is: ${alicePIN}`);
} else {
    console.log('Failed to find the PIN.');
}
