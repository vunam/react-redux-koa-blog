const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

const leadZero = n => (n > 9 ? `${n}` : `0${n}`)

export const strToShortDateTime = (dateString) => {
  const dateObj = new Date(dateString)
  return `${monthNames[dateObj.getMonth()]} ${dateObj.getDay()}, ${leadZero(dateObj.getHours())}:${leadZero(dateObj.getMinutes())}`
}
export default strToShortDateTime
