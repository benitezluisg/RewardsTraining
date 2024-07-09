import { Schedule } from "../types"

export const appointments = [
  {
    id: 1,
    date: '30/06/2024',
    hour: '16:00',
    status: 'pending',
    points: 16,
    user: {
      id: 2,
      name: 'Kylian Mbappe'
    },
    services: ['Hair', 'Beard']
  },
  {
    id: 2,
    date: '30/06/2024',
    hour: '13:00',
    status: 'pending',
    points: 16,
    user: {
      id: 2,
      name: 'Neymar Jr'
    },
    services: ['Hair', 'Beard']
  },
  {
    id: 3,
    date: '01/06/2024',
    hour: '09:00',
    status: 'pending',
    points: 8,
    user: {
      id: 2,
      name: 'Vinicius Jr.'
    },
    services: ['Hair']
  },
]

export const services = [
  {
    id: 1,
    service: 'Hair',
    points: 8,
  },
  {
    id: 2,
    service: 'Beard',
    points: 8,
  },
  {
    id: 3,
    service: 'Mustache',
    points: 6,
  },
  {
    id: 4,
    service: 'Mark the haircut',
    points: 4,
  },
]

export const rewards = [
  {
    id: 1,
    service: 'Hair',
    points: 40,
  },
  {
    id: 2,
    service: 'Water',
    points: 20,
  },
  {
    id: 3,
    service: 'Beard',
    points: 40,
  },
  {
    id: 3,
    service: 'Mark the haircut',
    points: 32,
  }
]

export const schedules: Schedule[] = [
  {
    id: 1,
    hour: '8:00',
    available: true,
  },
  {
    id: 2,
    hour: '9:00',
    available: true,
  },
  {
    id: 3,
    hour: '10:00',
    available: true,
  },
  {
    id: 4,
    hour: '11:00',
    available: true,
  },
  {
    id: 5,
    hour: '12:00',
    available: true,
  },
  {
    id: 6,
    hour: '15:00',
    available: true,
  },
  {
    id: 7,
    hour: '16:00',
    available: true,
  },
  {
    id: 8,
    hour: '17:00',
    available: true,
  },
  {
    id: 9,
    hour: '18:00',
    available: true,
  },
  {
    id: 10,
    hour: '19:00',
    available: true,
  },
]
