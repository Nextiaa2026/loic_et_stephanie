import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const scriptUrl = process.env.GOOGLE_SHEET_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_SHEET_URL is not defined");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 },
      );
    }

    // Forward the request to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      console.error("Google Apps Script error:", errorText);
      return NextResponse.json(
        { error: "Failed to submit to Google Sheets" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("RSVP API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
