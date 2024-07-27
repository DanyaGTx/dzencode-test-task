export interface IProduct {
  id: number;
  serialNumber: string;
  isNew: boolean;
  photo: string;
  title: string;
  type: string;
  order_name: string;
  specification: string;
  status: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: { value: number; symbol: string; isDefault: number }[];
  order: number;
  date: string;
}

export interface IOrder {
  id: number;
  title: string;
  date: string;
  products: IProduct[];
}
