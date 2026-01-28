import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "your-super-secret-key-change-in-production"
);

// Generate JWT token
export async function generateToken(payload, expiresIn = "7d") {
    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expiresIn)
        .sign(JWT_SECRET);

    return token;
}

// Verify JWT token
export async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return { valid: true, payload };
    } catch (error) {
        return { valid: false, error: error.message };
    }
}

// Parse token from cookie header
export function getTokenFromCookies(cookieHeader) {
    if (!cookieHeader) return null;

    const cookies = cookieHeader.split(";").reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split("=");
        acc[key] = value;
        return acc;
    }, {});

    return cookies.auth_token || null;
}

export default { generateToken, verifyToken, getTokenFromCookies };
