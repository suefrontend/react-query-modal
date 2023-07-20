import { NextApiResponse, NextApiRequest } from "next";
import { users } from "../../../data";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const json = await req.body; // Use req.body instead of req.json()
    console.log("json", json.username);

    // You can perform any necessary logic with the received data here
    // For example, you can save the data to a database or manipulate it in some way

    // Send back a response as JSON
    return res.json({});
  } else {
    // Return a 405 Method Not Allowed status code for other HTTP methods
    return res.status(405).end();
  }
}
