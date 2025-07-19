const fetchAnalytics = async (shortId = 'abcd') => {
    // This should be replaced with your actual API call

    // here right own data fetch 
    return {
        url: {
            shortUrl: `quicklink.com/${shortId}`,
            originalUrl: "https://example.com/very-long-url",
            totalClicks: 1247,
            createdAt: "2024-01-15",
        },
        clicksOverTime: [
            { date: "2024-01-15", clicks: 45 },
            { date: "2024-01-16", clicks: 67 },
            { date: "2024-01-17", clicks: 89 },
            { date: "2024-01-18", clicks: 123 },
            { date: "2024-01-19", clicks: 156 },
            { date: "2024-01-20", clicks: 134 },
            { date: "2024-01-21", clicks: 178 },
        ],
        deviceTypes: [
            { name: "Desktop", value: 45, color: "#6366F1" },
            { name: "Mobile", value: 35, color: "#10B981" },
            { name: "Tablet", value: 15, color: "#F59E0B" },
            { name: "Bot", value: 5, color: "#EF4444" },
        ],
        browsers: [
            { name: "Chrome", clicks: 456 },
            { name: "Safari", clicks: 234 },
            { name: "Firefox", clicks: 123 },
            { name: "Edge", clicks: 89 },
            { name: "Other", clicks: 67 },
        ],
        countries: [
            { name: "United States", clicks: 345, flag: "🇺🇸" },
            { name: "United Kingdom", clicks: 234, flag: "🇬🇧" },
            { name: "Canada", clicks: 156, flag: "🇨🇦" },
            { name: "Germany", clicks: 123, flag: "🇩🇪" },
            { name: "France", clicks: 89, flag: "🇫🇷" },
        ],
        referrers: [
            { name: "Direct", clicks: 456 },
            { name: "Google", clicks: 234 },
            { name: "Twitter", clicks: 123 },
            { name: "Facebook", clicks: 89 },
            { name: "LinkedIn", clicks: 67 },
        ],
        hourlyData: [
            { hour: "00", clicks: 12 },
            { hour: "01", clicks: 8 },
            { hour: "02", clicks: 5 },
            { hour: "03", clicks: 3 },
            { hour: "04", clicks: 7 },
            { hour: "05", clicks: 15 },
            { hour: "06", clicks: 25 },
            { hour: "07", clicks: 45 },
            { hour: "08", clicks: 67 },
            { hour: "09", clicks: 89 },
            { hour: "10", clicks: 95 },
            { hour: "11", clicks: 87 },
            { hour: "12", clicks: 92 },
            { hour: "13", clicks: 78 },
            { hour: "14", clicks: 85 },
            { hour: "15", clicks: 91 },
            { hour: "16", clicks: 88 },
            { hour: "17", clicks: 76 },
            { hour: "18", clicks: 65 },
            { hour: "19", clicks: 54 },
            { hour: "20", clicks: 43 },
            { hour: "21", clicks: 32 },
            { hour: "22", clicks: 25 },
            { hour: "23", clicks: 18 },
        ],
    };
};


export default fetchAnalytics;