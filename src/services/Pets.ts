import { api } from '../api'

export default {
  getPets: async () => api.get('/getPets'),

  addPet: async (pet: any) => api.post('/addPet', pet)
}
