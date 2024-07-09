import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { queryRewards, queryLogin, queryServices, queryAppointments } from '../api/queries'
import httpRequest from '../api/https'

const store = (set: any, get: any) => ({
  isFetching: false,
  appointments: [],
  services: [],
  rewards: [],
  profile: null,
  isLogged: false,
  getRewards: () => getRewards(set),
  getServices: () => getServices(set),
  getAppointments: () => getAppointments(set),
  login: (user: string, password: string) => login(user, password, set)
})

const login = async (user: string, password: string, set: any) => {
  const query = queryLogin({ user, password })

  const response = await httpRequest(query)

  AsyncStorage.setItem('token', response.token)

  set((state: any) => ({
    ...state,
    isLogged: true
  }))
}

const getRewards = async (set: any) => {
  const response = await httpRequest(queryRewards)

  set((state: any) => ({
    ...state,
    rewards: response.rewards
  }))
}

const getServices = async (set: any) => {
  const response = await httpRequest(queryServices)

  set((state: any) => ({
    ...state,
    services: response.services
  }))
}

const getAppointments = async (set: any) => {
  set((state: any) => ({
    ...state,
    isFetching: true
  }))

  const response = await httpRequest(queryAppointments)

  set((state: any) => ({
    ...state,
    appointments: response.appointments,
    isFetching: false
  }))
}

const useStore = create(store)

export default useStore