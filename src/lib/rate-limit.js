// Simple in-memory rate limiter using Map
// NOTE: In production (especially on serverless platforms like Vercel), 
// memory is not shared between instances. For robust rate limiting, 
// consider using Upstash/Redis.

const tokenCache = new Map();

export const rateLimit = (options) => {
    const { limit = 10, interval = 60000 } = options || {};

    return {
        check: async (token) => {
            const now = Date.now();
            const tokenData = tokenCache.get(token) || { count: 0, startTime: now };

            // Reset if interval passed
            if (now - tokenData.startTime > interval) {
                tokenData.count = 0;
                tokenData.startTime = now;
            }

            tokenData.count += 1;
            tokenCache.set(token, tokenData);

            if (tokenData.count > limit) {
                throw new Error("Rate limit exceeded");
            }

            return {
                limit,
                remaining: limit - tokenData.count,
            };
        },
    };
};

export default rateLimit;
