export default function getLocalTime() {
  const now = new Date()
  const hours = now.getHours()

  if (hours <= 12) {
    return hours + 'AM'
  } else {
    return hours - 12 + 'PM'
  }
}
