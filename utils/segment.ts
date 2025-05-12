export const formatSegment = (segment: string) => {
    return segment
        .replace(/-/g, ' ') // Replace dashes with spaces
        .replace(/\b\w/g, (c) => c.toUpperCase()) // Capitalize each word
}
