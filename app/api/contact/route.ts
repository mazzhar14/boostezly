import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log("New Contact Form Submission:");
  console.log({ name, email, message });

  return NextResponse.json({
    success: true,
    message: "Form submitted successfully",
  });
}