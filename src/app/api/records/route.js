// app/api/records/route.js
// Next.js lets you create backend API endpoints inside the app/ folder.
// This file handles HTTP requests: GET, POST, PUT, DELETE
// In a real project, this would connect to a database.
// Here, we use our dummy data as the "database".

import { NextResponse } from "next/server";
import { dummyRecords } from "@/lib/dummyData";

// We keep a mutable copy in memory (resets on server restart)
let records = [...dummyRecords];

// ✅ GET — Return all records
export async function GET(request) {
  // Get search query from URL: /api/records?search=FR8
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";

  // Filter records if search term is provided
  const filtered = records.filter(r =>
    r.functionalRequirementId.toLowerCase().includes(search.toLowerCase()) ||
    r.pyxisAIClassification.toLowerCase().includes(search.toLowerCase()) ||
    r.reason.toLowerCase().includes(search.toLowerCase())
  );

  // Return filtered records as JSON
  return NextResponse.json({ records: filtered, total: filtered.length });
}

// ✅ POST — Create a new record
export async function POST(request) {
  const body = await request.json(); // parse the request body
  const newRecord = {
    ...body,
    id: Date.now(), // generate unique id
  };
  records.push(newRecord);
  return NextResponse.json({ record: newRecord }, { status: 201 });
}

// ✅ PUT — Update an existing record
export async function PUT(request) {
  const body = await request.json();
  const index = records.findIndex(r => r.id === body.id);
  if (index === -1) {
    return NextResponse.json({ error: "Record not found" }, { status: 404 });
  }
  records[index] = body;
  return NextResponse.json({ record: records[index] });
}

// ✅ DELETE — Delete a record
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));
  records = records.filter(r => r.id !== id);
  return NextResponse.json({ success: true });
}