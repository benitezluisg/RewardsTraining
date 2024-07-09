export interface Appointment {
  id: number
  date: string
  hour: string
  status: 'pending' | 'completed' | 'canceled'
  points: number
  user: {
    id: number
    name: string
  },
  services: string[]
}

export interface Reward {
  id: number
  service: string
  points: number
}

export interface Service {
  id: number
  desc: string,
  points: number
}

export interface Schedule {
  id: number
  hour: string
  available: boolean
}