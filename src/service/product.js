import axios from "axios";

const productService = {
  getAll: async () => await axios.get(import.meta.env.VITE_APP_BASE_URL),
  getById: async (id) =>
    await axios.get(import.meta.env.VITE_APP_BASE_URL / id),
};

export default productService