import { filter, reject } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
// utils
// import axios from "../../utils/axios";
// import { orders } from '../../utils/mock-data/orders';
// ----------------------------------------------------------------------

const initialState = {
  notes: [],
  category: [],
};

const slice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes(state, action) {
      const product = action.payload;
      state.notes = [...state.notes, product];
      window.localStorage.setItem("Notes", JSON.stringify(state.notes));
    },
    getNotesFromStorage(state) {
      const data = window.localStorage.getItem("Notes");
      const flex = JSON.parse(data);
      if (flex !== null) state.notes = flex;
    },
    fakeNotes(state) {
      state.notes = [
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
      window.localStorage.setItem("Notes", JSON.stringify(state.notes));
    },
    deleteNote(state, action) {
      const product = action.payload;
      state.notes = reject(state.notes, { id: product });
      window.localStorage.setItem("Notes", JSON.stringify(state.notes));
    },
    clearData(state) {
      state.notes = [];
      state.category = [];

      localStorage.clear();
    },
    editNote(state, action) {
      const column = action.payload;
      const id = column.id;
      state.isLoading = false;
      state.notes[id] = column;
      window.localStorage.setItem("Notes", JSON.stringify(state.notes));
    },
    getCategory(state, action) {
      const filterData = filter(
        state.notes,
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
  addNotes,
  deleteNote,
  editNote,
  getCategory,
  getNotesFromStorage,
  clearData,
  fakeNotes,
} = slice.actions;

// ----------------------------------------------------------------------
