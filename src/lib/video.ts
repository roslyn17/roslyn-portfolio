// True when a link points at a video file (played in a popup instead of opening a new tab).
export const isVideo = (href: string) => /\.(mp4|webm|mov)$/i.test(href);
