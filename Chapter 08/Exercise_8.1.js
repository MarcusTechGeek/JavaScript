// Declaration of secret messages for encoding and decoding.
const secretMes1 = "How's%20it%20going%3F";  // Encoded secret message with special characters.
const secretMes2 = "How's it going?";  // Plain text secret message.

// Decoding the first secret message to reveal its original content.
const decodedComp = decodeURIComponent(secretMes1);
console.log(decodedComp);

// Encoding the second secret message to create a secure and shareable code.
const encodedComp = encodeURIComponent(secretMes2);
console.log(encodedComp);

// Working with a URI (Uniform Resource Identifier) containing spaces.
const uri = "http://www.basescripts.com?=Hello World";
const encoded = encodeURI(uri);  // Ensuring the URI is properly formatted for web usage.
console.log(encoded);
