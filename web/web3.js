import 'dotenv/config';
import bs58 from 'bs58';

console.log("SECRET_KEY from env:", process.env.SECRET_KEY);

if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined. Check .env file location and format.");
}

let parsedKey;
try {
    parsedKey = JSON.parse(process.env.SECRET_KEY.trim());
} catch (error) {
    throw new Error("SECRET_KEY is not valid JSON. Check the format in .env.");
}

const address = bs58.encode(new Uint8Array(parsedKey));

console.log("Encoded Address:", address);
