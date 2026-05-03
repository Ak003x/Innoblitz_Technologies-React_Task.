// Seed records
export const dummyRecords = [
  {
    id: 1,
    functionalRequirementId: "FR1.21",
    pyxisAIClassification: "Negative",
    developerValidationDocument: "DDI-38 Developer Validation 2",
    functionalDesignDocumentReference: "-",
    reason: "FR1.21 does not appear in either FDD.",
  },
  {
    id: 2,
    functionalRequirementId: "FR1.22",
    pyxisAIClassification: "Negative",
    developerValidationDocument: "DDI-38 Developer Validation 2",
    functionalDesignDocumentReference: "-",
    reason: "FR1.22 does not appear in either FDD.",
  },
  {
    id: 3,
    functionalRequirementId: "FR7.6",
    pyxisAIClassification: "Negative",
    developerValidationDocument: "DDI-38 Developer Validation 2",
    functionalDesignDocumentReference: "-",
    reason: "FR7.6 does not appear in either FDD.",
  },
  {
    id: 4,
    functionalRequirementId: "FR7.9",
    pyxisAIClassification: "Negative",
    developerValidationDocument: "DDI-38 Developer Validation 2",
    functionalDesignDocumentReference: "-",
    reason: "FR7.9 does not appear in either FDD.",
  },
  {
    id: 5,
    functionalRequirementId: "FR8",
    pyxisAIClassification: "Positive",
    developerValidationDocument: "DDI-38 Developer validation 1",
    functionalDesignDocumentReference: "IT4_Appeals and Hearings_WP_FDD",
    reason: "FR8 appears in IT4_Appeals and Hearings_WP_FDD.",
  },
  {
    id: 6,
    functionalRequirementId: "FR8.1",
    pyxisAIClassification: "Positive",
    developerValidationDocument: "DDI-38 Developer validation 1",
    functionalDesignDocumentReference: "IT4_Appeals and Hearings_WP_FDD",
    reason: "FR8.1 appears in IT4_Appeals and Hearings_WP_FDD.",
  },
  {
    id: 7,
    functionalRequirementId: "FR8.2",
    pyxisAIClassification: "Positive",
    developerValidationDocument: "DDI-38 Developer validation 1",
    functionalDesignDocumentReference: "IT4_Appeals and Hearings_WP_FDD",
    reason: "FR8.2 appears in IT4_Appeals and Hearings_WP_FDD.",
  },
  {
    id: 8,
    functionalRequirementId: "FR8.59",
    pyxisAIClassification: "Positive",
    developerValidationDocument: "DDI-38 Developer validation 1",
    functionalDesignDocumentReference: "IT4_Appeals and Hearings_WP_FDD",
    reason: "FR8.59 appears in IT4_Appeals and Hearings_WP_FDD.",
  },
  {
    id: 9,
    functionalRequirementId: "FR8.64",
    pyxisAIClassification: "Positive",
    developerValidationDocument: "DDI-38 Developer validation 1",
    functionalDesignDocumentReference: "IT4_Appeals and Hearings_WP_FDD",
    reason: "FR8.64 appears in IT4_Appeals and Hearings_WP_FDD.",
  },
  {
    id: 10,
    functionalRequirementId: "FR8.163",
    pyxisAIClassification: "Positive",
    developerValidationDocument: "DDI-38 Developer validation 1",
    functionalDesignDocumentReference: "IT4_Appeals and Hearings_WP_FDD",
    reason: "FR8.163 appears in IT4_Appeals and Hearings_WP_FDD.",
  },
  // Generated records
  ...Array.from({ length: 40 }, (_, i) => ({
    id: i + 11,
    functionalRequirementId: `FR${Math.floor(Math.random() * 20) + 1}.${i + 1}`,
    pyxisAIClassification: i % 3 === 0 ? "Negative" : "Positive",
    developerValidationDocument:
      i % 2 === 0
        ? "DDI-38 Developer validation 1"
        : "DDI-38 Developer Validation 2",
    functionalDesignDocumentReference:
      i % 3 === 0 ? "-" : "IT4_Appeals and Hearings_WP_FDD",
    reason:
      i % 3 === 0
        ? `FR${i + 1} does not appear in either FDD.`
        : `FR${i + 1} appears in IT4_Appeals and Hearings_WP_FDD.`,
  })),
];

// Chart data
export const chartData = {
  validateDesign: {
    title: "Validate Design with Source Code",
    data: [
      { name: "Addresses FR", value: 84, color: "#1e2a6e" },
      { name: "Does not address FR", value: 16, color: "#c5c9d6" },
    ],
  },
  identifyGaps: {
    title: "Identify Gaps in Unit Test Checklist",
    data: [
      { name: "Matches FDD", value: 92, color: "#1e2a6e" },
      { name: "Does not match", value: 8, color: "#c5c9d6" },
    ],
  },
};
