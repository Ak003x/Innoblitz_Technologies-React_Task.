"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecord, updateRecord, closeModal } from "@/redux/tableSlice";

const emptyForm = {
  functionalRequirementId: "",
  pyxisAIClassification: "Positive",
  developerValidationDocument: "",
  functionalDesignDocumentReference: "",
  reason: "",
};

// Mounts fresh each time the modal opens — useState initializes from record without needing an effect.
function ModalContent({ record, onSubmit, onClose }) {
  const [form, setForm] = useState(record ?? emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div
      className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        {record ? "Edit Record" : "Add New Record"}
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
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm text-white bg-[#1a2057] rounded-lg hover:bg-[#2a3577] transition"
          >
            {record ? "Save Changes" : "Add Record"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function RecordModal() {
  const dispatch = useDispatch();
  const { isModalOpen, selectedRecord } = useSelector((s) => s.table);

  if (!isModalOpen) return null;

  const handleSubmit = (data) => {
    if (selectedRecord) {
      dispatch(updateRecord({ ...data, id: selectedRecord.id }));
    } else {
      dispatch(addRecord(data));
    }
    dispatch(closeModal());
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => dispatch(closeModal())}
    >
      <ModalContent
        record={selectedRecord}
        onSubmit={handleSubmit}
        onClose={() => dispatch(closeModal())}
      />
    </div>
  );
}
