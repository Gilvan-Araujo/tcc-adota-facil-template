import { api } from '@api/index'

export default {
  getPets: async () => api.get('/getPets'),

  addPet: async (pet: any) => api.post('/addPet', pet)
}
