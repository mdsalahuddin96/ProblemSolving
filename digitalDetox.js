function checkDigitalDetox(logs) {
    if (logs.length === 0) return true;
    const sortedLogs = logs
        .map(log => new Date(log))
        .sort((a, b) => a - b);

    const dailyCounts = {};
    const FOUR_HOURS_MS = 4 * 60 * 60 * 1000;

    for (let i = 0; i < sortedLogs.length; i++) {
        const currentLog = sortedLogs[i];
        const dateKey = currentLog.toISOString().split('T')[0]; 
    
        if (i > 0) {
            const previousLog = sortedLogs[i - 1];
            if (currentLog - previousLog < FOUR_HOURS_MS) {
                return false;
            }
        }

        dailyCounts[dateKey] = (dailyCounts[dateKey] || 0) + 1;
        if (dailyCounts[dateKey] > 2) {
            return false; 
        }
    }
    return true;
}


const logs = [
    "2026-03-01 08:00:00",
    "2026-03-01 13:00:00",
    "2026-03-02 10:00:00"
];

console.log(checkDigitalDetox(logs));