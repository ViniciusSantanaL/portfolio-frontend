import axios from "axios";

export const useApi = () => axios.create({
    timeout: 3000
});