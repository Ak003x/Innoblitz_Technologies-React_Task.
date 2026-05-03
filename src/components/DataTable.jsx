// components/DataTable.jsx
// The main table with all CRUD operations: search, paginate, edit, delete, add.
"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setCurrentPage,
  deleteRecord,
  openAddModal,
  openEditModal,
} from "@/redux/tableSlice";
import RecordModal from "./RecordModal";

export default function DataTable() {
  const dispatch = useDispatch();

  // Read everything we need from Redux state
  const { records, searchQuery, currentPage, itemsPerPage } = useSelector(
    (s) => s.table
  );

  // 🔍 Filter records based on search query
  const filtered = records.filter((r) =>
    r.functionalRequirementId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.pyxisAIClassification.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.reason.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 📄 Pagination — slice the array to show only current page's records
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageRecords = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Header row: title + search + add button */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-lg font-bold text-gray-800">
          Identify Gaps in Unit Test Checklist — Detail View
        </h2>

        <div className="flex items-center gap-3">
          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="border border-gray-200 rounded-lg px-3 py-2 pl-9 text-sm focus:outline-none focus:border-blue-400 w-48"
            />
            <svg className="absolute left-2.5 top-2.5 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16.5 16.5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Export button */}
          <button className="flex items-center gap-1.5 px-3 py-2 border border-orange-300 text-orange-500 text-sm rounded-lg hover:bg-orange-50 transition">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v13M7 12l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5 20h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Export
          </button>

          {/* Add new record button */}
          <button
            onClick={() => dispatch(openAddModal())}
            className="px-4 py-2 bg-[#1a2057] text-white text-sm rounded-lg hover:bg-[#2a3577] transition"
          >
            + Add Record
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          {/* Table head */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">FR ID</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Classification</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Developer Validation Doc</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">FDD Reference</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Reason</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {pageRecords.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-400 text-sm">
                  No records found.
                </td>
              </tr>
            ) : (
              pageRecords.map((record, idx) => (
                <tr
                  key={record.id}
                  className={`border-b border-gray-50 hover:bg-gray-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  {/* FR ID */}
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {record.functionalRequirementId}
                  </td>

                  {/* Classification — colored badge */}
                  <td className="px-4 py-3">
                    <span
                      className={`font-semibold ${
                        record.pyxisAIClassification === "Positive"
                          ? "text-green-600"   // green for positive
                          : "text-red-500"     // red for negative
                      }`}
                    >
                      {record.pyxisAIClassification}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {record.developerValidationDocument}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {record.functionalDesignDocumentReference}
                  </td>

                  <td className="px-4 py-3 text-gray-600 max-w-xs">
                    {record.reason}
                  </td>

                  {/* Action buttons: Edit + Delete */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {/* Edit button */}
                      <button
                        onClick={() => dispatch(openEditModal(record))}
                        className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition"
                      >
                        Edit
                      </button>

                      {/* Delete button */}
                      <button
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this record?")) {
                            dispatch(deleteRecord(record.id));
                          }
                        }}
                        className="px-2 py-1 text-xs bg-red-50 text-red-500 rounded hover:bg-red-100 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-400">
          Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filtered.length)} of {filtered.length} records
        </span>

        <div className="flex items-center gap-1">
          {/* Previous button */}
          <button
            onClick={() => dispatch(setCurrentPage(Math.max(1, currentPage - 1)))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 text-xs border border-gray-200 rounded-lg disabled:opacity-40 hover:bg-gray-50 transition"
          >
            Previous
          </button>

          {/* Page numbers */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => dispatch(setCurrentPage(page))}
              className={`w-8 h-8 text-xs rounded-lg transition ${
                currentPage === page
                  ? "bg-[#1a2057] text-white"
                  : "border border-gray-200 hover:bg-gray-50 text-gray-600"
              }`}
            >
              {page}
            </button>
          ))}

          {totalPages > 5 && (
            <span className="px-1 text-gray-400 text-xs">...</span>
          )}
          {totalPages > 5 && (
            <button
              onClick={() => dispatch(setCurrentPage(totalPages))}
              className="w-8 h-8 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition"
            >
              {totalPages}
            </button>
          )}

          {/* Next button */}
          <button
            onClick={() => dispatch(setCurrentPage(Math.min(totalPages, currentPage + 1)))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 text-xs bg-orange-400 text-white rounded-lg disabled:opacity-40 hover:bg-orange-500 transition"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal renders itself — it checks isModalOpen from Redux */}
      <RecordModal />
    </div>
  );
}