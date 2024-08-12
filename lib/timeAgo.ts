export default function timeAgo(date: Date) {
  let todayDate = new Date();
//   let tmroDate = new Date(todayDate.setDate(todayDate.getDate() + 2));
  let timeDiff = Math.floor(
    (todayDate.getTime() - new Date(date).getTime()) / (1000 * 3600 * 24)
  );
  if (timeDiff < 30) {
    const result = timeDiff < 2 ?  "1 day ago" :  timeDiff + " days ago"
    return result
  } else {
    return `${Math.floor(timeDiff / 30)} months ago`;
  }
}
