export const useProductsService = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const getAllProducts = async () => {
    const { data, error } = await useFetch(`${apiBaseUrl}/api/products/`);

    if (error.value) {
      throw new Error("Failed to fetch data");
    }

    return data.value;
  };

  return {
    getAllProducts,
  };
};
