import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  prompt: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ prompt: req.body.prompt });
}
