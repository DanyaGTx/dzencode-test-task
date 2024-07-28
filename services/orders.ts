export const useOrdersService = () => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;

  const getAllOrders = async () => {
    const { data, error } = await useFetch(`${apiBaseUrl}/api/orders/`);

    if (error.value) {
      throw new Error("Failed to fetch data");
    }

    return data.value;
  };

  return {
    getAllOrders,
  };
};
