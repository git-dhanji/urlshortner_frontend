export default function isValidURL(url) {
    try {
        if (!url) return false;
        const pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/;

        return pattern.test(url.trim());
    } catch (_) {
        return false;
    }
}