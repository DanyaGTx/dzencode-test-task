export const useOrdersService = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

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
