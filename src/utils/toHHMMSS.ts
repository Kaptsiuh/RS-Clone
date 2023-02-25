export const toHHMMSS = (total: number) => {
  let hours = Math.floor(total / 3600);
  let minutes = Math.floor((total - hours * 3600) / 60);
  let seconds = total - hours * 3600 - minutes * 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
