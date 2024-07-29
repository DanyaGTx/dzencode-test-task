export const useProductsService = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const getAllProducts = async () => {
    try {
      const response = await $fetch(`${apiBaseUrl}/api/products/`);
      return response;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  return {
    getAllProducts,
  };
};
