export default function generateUUID() {
    return crypto.randomUUID(); // Available in Node.js 15.6.0+ and browsers
}