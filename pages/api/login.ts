import type { NextApiRequest, NextApiResponse } from "next";

const PASSWORD = process.env.PASSWORD || "";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { password } = req.body;

    if (password === PASSWORD) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Senha errada" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
