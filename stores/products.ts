import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      id: 1,
      serialNumber: "SN-12.312412",
      isNew: true,
      photo: "https://content.rozetka.com.ua/goods/images/big/440095817.jpg",
      title: "Монитор 27'' Samsung Odyssey DG50 S27DG502EI (LS27DG502EIXCI)",
      type: "monitor",
      order_name: "Длинное предлинное название прихода",
      specification: "Specification 1",
      status: "free",
      guarantee: {
        start: "2017-06-29",
        end: "2017-06-29",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 1,
      date: "2017-06-29",
    },
    {
      id: 2,
      serialNumber: "SN-12.312412",
      isNew: false,
      photo: "https://content2.rozetka.com.ua/goods/images/big/404971763.jpg",
      title:
        "Монитор 23.8'' Asus VG249QL3A (90LM09G0-B01170) Full HD / Fast IPS / 180Hz / 1 мс GTG",
      type: "monitor",
      order_name: "Длинное предлинное название прихода",
      specification: "Specification 1",
      status: "repairing",
      guarantee: {
        start: "2017-06-29",
        end: "2017-06-29",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 2,
      date: "2017-06-29",
    },
    {
      id: 3,
      serialNumber: "SN-12.312412",
      isNew: false,
      photo: "https://content2.rozetka.com.ua/goods/images/big/411231783.jpg",
      title: "Монитор 27'' Acer EK271EBI (UM.HE1EE.E02) IPS FHD / 100Hz / 1ms",
      type: "monitor",
      order_name: "Длинное предлинное название прихода",
      specification: "Specification 1",
      status: "free",
      guarantee: {
        start: "2017-06-29",
        end: "2017-06-29",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 2,
      date: "2017-06-29",
    },
    {
      id: 4,
      serialNumber: "SN-12.312412",
      isNew: true,
      photo:
        "https://content2.rozetka.com.ua/goods/images/big_tile/88330244.jpg",
      title: "Клавиатура проводная Logitech Wave Keys",
      type: "keyboard",
      order_name: "Длинное предлинное название прихода",
      specification: "Specification 1",
      status: "free",
      guarantee: {
        start: "2017-06-29",
        end: "2017-06-29",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 2,
      date: "2017-06-29",
    },
  ]);

  const productTypes = [
    { value: "keyboard", label: "Keyboards" },
    { value: "monitor", label: "Monitors" },
  ];

  const deleteProduct = (productId: number) => {
    products.value = products.value.filter(
      (product) => product.id !== productId
    );
  };

  return { products, productTypes, deleteProduct };
});
