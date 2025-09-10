import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Clock from './components/Clock.jsx'
import { SUPER_CITIES, findCityByName } from './utils/timezones.js'

function App() {
  const [ip, setIp] = useState('')
  const [zone, setZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const [query, setQuery] = useState('')
  const [cities, setCities] = useState(SUPER_CITIES)

  useEffect(() => {
    // 获取IP与时区（使用公开IP服务）
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        if (data?.ip) setIp(data.ip)
        if (data?.timezone) setZone(data.timezone)
      })
      .catch(() => {})
  }, [])

  const centerLabel = useMemo(() => {
    return ip ? `您的IP：${ip}（${zone}）` : `本地时区：${zone}`
  }, [ip, zone])

  const onAddCity = (e) => {
    e.preventDefault()
    const found = findCityByName(query)
    if (found && !cities.find(c => c.id === found.id)) {
      setCities(prev => [...prev, found])
    }
    setQuery('')
  }

  return (
    <div className="page">
      <header className="header">
        <h1>世界时钟</h1>
        <form className="search" onSubmit={onAddCity}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="输入城市名称（中文或英文）后回车添加"
          />
          <button type="submit">添加</button>
        </form>
      </header>

      <section className="center">
        <Clock label={centerLabel} zone={zone} theme="center" large />
      </section>

      <section className="grid">
        {cities.map(city => (
          <Clock
            key={city.id}
            label={`${city.displayName} / ${city.name}`}
            zone={city.zone}
            theme={city.theme}
          />
        ))}
      </section>
    </div>
  )
}

export default App
