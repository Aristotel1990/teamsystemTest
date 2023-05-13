import { filter, reject } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
// utils
// import axios from "../../utils/axios";
// import { orders } from '../../utils/mock-data/orders';
// ----------------------------------------------------------------------

const initialState = {
  data: [],
  customers: [],
  items: [],
  invoices: [],
  singleInvoice: [],
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addata(state, action) {
      const product = action.payload;
      state.data = [...state.data, product];
    },
    createInoices(state, action) {
      const product = action.payload;
      state.invoices = [...state.invoices, product];
      window.localStorage.setItem("invoices", JSON.stringify(state.invoices));
    },
    addData(state, action) {
      const product = action.payload;
      state.singleInvoice = [...state.singleInvoice, product];
    },
    deleteInvoiceItemsByID(state, action) {
      const product = action.payload;
      state.singleInvoice = reject(state.singleInvoice, { id: product });
    },
    addCustomers(state, action) {
      const product = action.payload;
      state.customers = [...state.customers, product];
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    clearCustomers(state, action) {
      state.customers = [];
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    deleteCustomersByID(state, action) {
      const product = action.payload;
      state.customers = reject(state.customers, { id: product });
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    addFakeItems(state) {
      state.items = [
        { id: 0, number: "546454a", title: "glasses", price: 150 },
        { id: 1, number: "43424", title: "shoes", price: 200 },
        { id: 2, number: "4234524", title: "phone", price: 200 },
        { id: 3, number: "4245224", title: "book", price: 200 },
        {
          id: 4,
          number: "42547524",
          title: "tshirt",
          price: 200,
        },
        { id: 5, number: "424", title: "jeans", price: 200 },
        {
          id: 6,
          number: "45234245",
          title: "pants",
          price: 200,
        },
        { id: 7, number: "7586732", title: "sun glasses", price: 200 },
        {
          id: 8,
          number: "43736532",
          title: "tv",
          price: 200,
        },
      ];
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    clearItems(state, action) {
      state.items = [];
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    deleteItemsByID(state, action) {
      const product = action.payload;
      state.items = reject(state.items, { id: product });
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    addItems(state, action) {
      const product = action.payload;
      state.items = [...state.items, product];
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    addFakeCustomers(state) {
      state.customers = [
        { id: 0, number: "546454a", name: "Jon Adams", country: "Albania" },
        { id: 1, number: "43424", name: "Cersei Loss", country: "Albania" },
        { id: 2, number: "4234524", name: "Jaime Derulo", country: "Albania" },
        { id: 3, number: "4245224", name: "Arya Grande", country: "Albania" },
        {
          id: 4,
          number: "42547524",
          name: "Daenerys Conte",
          country: "Albania",
        },
        { id: 5, number: "424", name: "Daenerys Ferara", country: "Albania" },
        {
          id: 6,
          number: "45234245",
          name: "Ferrara Donis",
          country: "Albania",
        },
        { id: 7, number: "7586732", name: "Marco Rossini", country: "Albania" },
        {
          id: 8,
          number: "43736532",
          name: "Harvey hedley",
          country: "Albania",
        },
      ];
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    getdataFromStorage(state) {
      const data = window.localStorage.getItem("customers");
      const flex = JSON.parse(data);
      if (flex !== null) state.customers = flex;
    },

    getItemsFromStorage(state) {
      const data = window.localStorage.getItem("items");
      const flex = JSON.parse(data);
      if (flex !== null) state.items = flex;
    },
    fakedata(state) {
      state.data = [
        {
          id: 0,
          title: "Flex 1",
          date: new Date(),
          note: "meeting with a friend",
          important: "Important",
        },
        {
          id: 1,
          title: "Flex 2",
          date: new Date(),
          note: "meeting with a friend",
          important: "Not important",
        },
        {
          id: 2,
          title: "Flex 3",
          date: new Date(),
          note: "meeting with a friend",
          important: "Very important",
        },
      ];
      window.localStorage.setItem("data", JSON.stringify(state.data));
    },
    deleteNote(state, action) {
      const product = action.payload;
      state.data = reject(state.data, { id: product });
      window.localStorage.setItem("data", JSON.stringify(state.data));
    },
    clearData(state) {
      state.data = [];
      state.category = [];

      localStorage.clear();
    },
    editNote(state, action) {
      const column = action.payload;
      const id = column.id;
      state.isLoading = false;
      state.data[id] = column;
      window.localStorage.setItem("data", JSON.stringify(state.data));
    },

    getCategory(state, action) {
      const filterData = filter(
        state.data,
        (user) => user.important === action.payload
      );
      state.category = filterData;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  adddata,
  deleteNote,
  editNote,
  getCategory,
  getdataFromStorage,
  clearData,
  fakedata,
  addCustomers,
  addFakeCustomers,
  addFakeItems,
  clearCustomers,
  deleteCustomersByID,
  clearItems,
  addItems,
  deleteItemsByID,
  getItemsFromStorage,
  addData,
  deleteInvoiceItemsByID,
  createInoices,
} = slice.actions;

// ----------------------------------------------------------------------
