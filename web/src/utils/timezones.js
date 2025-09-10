export const SUPER_CITIES = [
  { id: 'new_york', name: 'New York', displayName: '纽约', zone: 'America/New_York', theme: 'ny' },
  { id: 'london', name: 'London', displayName: '伦敦', zone: 'Europe/London', theme: 'ldn' },
  { id: 'paris', name: 'Paris', displayName: '巴黎', zone: 'Europe/Paris', theme: 'paris' },
  { id: 'dubai', name: 'Dubai', displayName: '迪拜', zone: 'Asia/Dubai', theme: 'dubai' },
  { id: 'mumbai', name: 'Mumbai', displayName: '孟买', zone: 'Asia/Kolkata', theme: 'mumbai' },
  { id: 'beijing', name: 'Beijing', displayName: '北京', zone: 'Asia/Shanghai', theme: 'beijing' },
  { id: 'tokyo', name: 'Tokyo', displayName: '东京', zone: 'Asia/Tokyo', theme: 'tokyo' },
  { id: 'sydney', name: 'Sydney', displayName: '悉尼', zone: 'Australia/Sydney', theme: 'sydney' },
]

export const KNOWN_CITIES = [
  ...SUPER_CITIES,
  { id: 'hong_kong', name: 'Hong Kong', displayName: '香港', zone: 'Asia/Hong_Kong', theme: 'hk' },
  { id: 'singapore', name: 'Singapore', displayName: '新加坡', zone: 'Asia/Singapore', theme: 'sg' },
  { id: 'berlin', name: 'Berlin', displayName: '柏林', zone: 'Europe/Berlin', theme: 'berlin' },
  { id: 'los_angeles', name: 'Los Angeles', displayName: '洛杉矶', zone: 'America/Los_Angeles', theme: 'la' },
  { id: 'san_francisco', name: 'San Francisco', displayName: '旧金山', zone: 'America/Los_Angeles', theme: 'sf' },
  { id: 'shanghai', name: 'Shanghai', displayName: '上海', zone: 'Asia/Shanghai', theme: 'shanghai' },
]

export function findCityByName(input) {
  const text = String(input || '').trim().toLowerCase()
  if (!text) return null
  return KNOWN_CITIES.find(c =>
    c.name.toLowerCase() === text ||
    c.displayName.toLowerCase() === text
  ) || null
}

