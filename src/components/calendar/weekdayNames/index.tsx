export default function WeekdayNames() {
  const weekdayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="grid grid-cols-7 px-4 pb-2 font-medium">
      {weekdayNames.map((item, index) => {
        const color = index <= 4 ? 'text-blue-900' : 'text-blue-400'

        return (
          <span key={item} className={`my-2 ml-2 ${color}`}>
            {item}
          </span>
        )
      })}
    </div>
  )
}
