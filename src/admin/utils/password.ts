import argon2 from "argon2";



export async function generateHash(plain_password) {
    return await argon2.hash(plain_password);
}
