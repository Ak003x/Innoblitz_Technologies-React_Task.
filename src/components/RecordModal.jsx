"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecord, updateRecord, closeModal } from "@/redux/tableSlice";

// Empty form defaults
const emptyForm = {
  functionalRequirementId: "",
  pyxisAIClassification: "Positive",
  developerValidationDocument: "",
  functionalDesignDocumentReference: "",
  reason: "",
};

export default function RecordModal() {
  const dispatch = useDispatch();
  const { isModalOpen, selectedRecord } = useSelector((s) => s.table);

  // Form state
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    setForm(selectedRecord ?? emptyForm);
  }, [selectedRecord, isModalOpen]);

  if (!isModalOpen) return null;

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRecord) {
      dispatch(updateRecord({ ...form, id: selectedRecord.id }));
    } else {
      dispatch(addRecord(form));
    }
    dispatch(closeModal());
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => dispatch(closeModal())}
    >
      {/* Modal box */}
      <div
        className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          {selectedRecord ? "Edit Record" : "Add New Record"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* FR ID */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">
              Functional Requirement ID
            </label>
            <input
              name="functionalRequirementId"
              value={form.functionalRequirementId}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              placeholder="e.g. FR8.5"
            />
          </div>

          {/* Classification */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">
              PyxisAI Classification
            </label>
            <select
              name="pyxisAIClassification"
              value={form.pyxisAIClassification}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
            >
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
            </select>
          </div>

          {/* Developer validation doc */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">
              Developer Validation Document
            </label>
            <input
              name="developerValidationDocument"
              value={form.developerValidationDocument}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              placeholder="e.g. DDI-38 Developer Validation 1"
            />
          </div>

          {/* FDD reference */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">
              FDD Reference
            </label>
            <input
              name="functionalDesignDocumentReference"
              value={form.functionalDesignDocumentReference}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              placeholder="e.g. IT4_Appeals and Hearings_WP_FDD"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="text-xs text-gray-500 font-medium block mb-1">
              Reason
            </label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none"
              placeholder="Explain why..."
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={() => dispatch(closeModal())}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-[#1a2057] rounded-lg hover:bg-[#2a3577] transition"
            >
              {selectedRecord ? "Save Changes" : "Add Record"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
