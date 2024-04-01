export default function albumDuration(tracks) {
  const seconds = tracks.reduce((acc, track) => acc + track.duration, 0);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const hoursStr = hours ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  const minutesStr = `${minutes} minute${minutes > 1 ? 's' : ''}`;
  return [hoursStr, minutesStr].filter(Boolean).join(' ') || '0 minutes';
}
