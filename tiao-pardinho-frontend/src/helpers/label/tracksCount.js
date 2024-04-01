export default function tracksCount(tracks) {
  return `${tracks.length} track${tracks.length > 1 ? 's' : ''}`;
}
