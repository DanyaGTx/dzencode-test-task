export const useProductsService = () => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;

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
