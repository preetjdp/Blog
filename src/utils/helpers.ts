export function formatReadingTime(minutes: number): string {
    let cups = Math.round(minutes / 5);
    let bowls = 0;
    if (cups > 5) {
        return `${new Array(Math.round(cups / Math.E))
            .fill('🍱')
            .join('')} ${minutes} min read`;
    } else {
        return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
    }
}

export function formatCreatedDate(date: string): string {
    let _date = new Date(date);
    return _date.toLocaleDateString("en", { day: 'numeric', month: 'long', year: 'numeric' },)
}
