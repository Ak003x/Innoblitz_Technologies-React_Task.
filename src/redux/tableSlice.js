
import { createSlice } from "@reduxjs/toolkit";
import { dummyRecords } from "@/lib/dummyData";


const tableSlice = createSlice({
  name: "table", 

  initialState: {
    records: dummyRecords, 
    searchQuery: "", 
    currentPage: 1, 
    itemsPerPage: 10, 
    selectedRecord: null, 
    isModalOpen: false, 
  },

  reducers: {
   
    addRecord: (state, action) => {
      
      const newRecord = {
        ...action.payload,
        id: Date.now(), 
      };
      state.records.push(newRecord); 
    },

    // ✅ UPDATE — Edit an existing record
    updateRecord: (state, action) => {
      // action.payload = { id, ...updated fields }
      const index = state.records.findIndex((r) => r.id === action.payload.id);
      // findIndex returns -1 if not found, so we check
      if (index !== -1) {
        state.records[index] = action.payload; // replace the old record
      }
    },

    // ✅ DELETE — Remove a record
    deleteRecord: (state, action) => {
      // action.payload = the id of the record to delete
      state.records = state.records.filter((r) => r.id !== action.payload);
    },

    // 🔍 SEARCH — Filter records by search text
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // reset to page 1 when searching
    },

    // 📄 PAGINATION — Change the current page
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    // 🗔 MODAL CONTROL — Open the modal for adding
    openAddModal: (state) => {
      state.selectedRecord = null; // no record selected = add mode
      state.isModalOpen = true;
    },

    // 🗔 MODAL CONTROL — Open the modal for editing
    openEditModal: (state, action) => {
      state.selectedRecord = action.payload; // store the record to edit
      state.isModalOpen = true;
    },

    // 🗔 MODAL CONTROL — Close the modal
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedRecord = null;
    },
  },
});

// Export actions so components can use them
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

// Export the reducer to combine in the store
export default tableSlice.reducer;
