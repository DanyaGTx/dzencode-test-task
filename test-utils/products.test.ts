import { describe, it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import ProductsPage from "../pages/index.vue";
import ProductList from "../components/product/List.vue";
import ProductItem from "../components/product/Item.vue";
import { mockedProducts } from "./mockedData";

// mocking fetch
vi.stubGlobal("$fetch", () => Promise.resolve(mockedProducts));

describe("Products page", () => {
  it("renders page title properly", () => {
    const wrapper = mount(ProductsPage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
        stubs: {
          ProductFilter: true,
          ProductList: true,
          BaseLoader: true,
          BaseModal: true,
          ProductItem: true,
        },
      },
    });
    expect(wrapper.text()).toContain("Продукты");
  });

  it("should render product list correctly", async () => {
    const wrapper = mount(ProductList, {
      props: {
        products: mockedProducts,
      },
      global: {
        components: { ProductItem },
        stubs: {
          BaseModal: true,
          BaseIconDelete: true,
        },
      },
    });

    await flushPromises();

    expect(wrapper.text()).toContain("Монитор 27'' Samsung Odyssey");
    expect(wrapper.text()).toContain("Длинное предлинное название прихода");
  });
});
