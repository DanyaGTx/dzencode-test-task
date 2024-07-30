import { describe, it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import OrdersPage from "../pages/orders/index.vue";
import OrderList from "../components/order/List.vue";
import OrderItem from "../components/order/Item.vue";
import { mockedOrders } from "./mockedData";

// mocking fetch
vi.stubGlobal("$fetch", () => Promise.resolve(mockedOrders));

describe("Order page", () => {
  it("renders page title properly", () => {
    const wrapper = mount(OrdersPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
        stubs: {
          OrderList: true,
          BaseLoader: true,
        },
      },
    });
    expect(wrapper.text()).toContain("Заказы");
  });

  it("should render order list correctly", async () => {
    const wrapper = mount(OrderList, {
      props: {
        orders: mockedOrders,
      },
      global: {
        components: { OrderItem },
        stubs: {
          BaseModal: true,
          BaseIconDelete: true,
          BaseIconArrowRight: true,
          BaseIconList: true,
          OrderOpenedItem: true,
        },
      },
    });

    await flushPromises();

    expect(wrapper.text()).toContain(
      "Длинное предлинное название прихода для Заказа 1"
    );
  });
});
