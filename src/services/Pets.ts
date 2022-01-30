import { api } from '../api'

export default {
  // get all pets
  getPets: async () => api.get('/getPets')

  // createPet: async (pet: any) => api.post('/createPet', pet)
}
