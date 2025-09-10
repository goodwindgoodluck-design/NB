import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'

export default function Clock({ label, zone, theme = 'default', large = false }) {
  const [now, setNow] = useState(DateTime.now().setZone(zone))

  useEffect(() => {
    const id = setInterval(() => {
      setNow(DateTime.now().setZone(zone))
    }, 1000)
    return () => clearInterval(id)
  }, [zone])

  const timeStr = now.toFormat('HH:mm:ss')
  const dateStr = now.toFormat('ccc, LLL dd')

  return (
    <div className={`clock ${theme} ${large ? 'large' : ''}`}>
      <div className="clock-label">{label}</div>
      <div className="clock-time">{timeStr}</div>
      <div className="clock-date">{dateStr}</div>
    </div>
  )
}

