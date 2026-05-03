import { createSlice } from "@reduxjs/toolkit";
import { dummyRecords } from "@/lib/dummyData";

const tableSlice = createSlice({
  name: "table",

  // Initial state
  initialState: {
    records: dummyRecords,
    searchQuery: "",
    currentPage: 1,
    itemsPerPage: 10,
    selectedRecord: null,
    isModalOpen: false,
  },

  // Reducers
  reducers: {
    // Add
    addRecord: (state, action) => {
      state.records.push({ ...action.payload, id: Date.now() });
    },
    // Update
    updateRecord: (state, action) => {
      const index = state.records.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state.records[index] = action.payload;
      }
    },
    // Delete
    deleteRecord: (state, action) => {
      state.records = state.records.filter((r) => r.id !== action.payload);
    },
    // Search
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    // Pagination
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // Modal — open add
    openAddModal: (state) => {
      state.selectedRecord = null;
      state.isModalOpen = true;
    },
    // Modal — open edit
    openEditModal: (state, action) => {
      state.selectedRecord = action.payload;
      state.isModalOpen = true;
    },
    // Modal — close
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedRecord = null;
    },
  },
});

// Exports
export const {
  addRecord,
  updateRecord,
  deleteRecord,
  setSearchQuery,
  setCurrentPage,
  openAddModal,
  openEditModal,
  closeModal,
} = tableSlice.actions;

export default tableSlice.reducer;
