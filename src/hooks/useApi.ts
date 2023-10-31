import axios from 'axios'
export const baseUrl = 'https://api.github.com/users/ViniciusSantanaL'
export const useApi = () =>
  axios.create({
    timeout: 3000,
  })
