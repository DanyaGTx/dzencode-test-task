export const useOrdersService = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const getAllOrders = async () => {
    try {
      const response = await $fetch(`${apiBaseUrl}/api/orders/`);
      return response;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  return {
    getAllOrders,
  };
};
