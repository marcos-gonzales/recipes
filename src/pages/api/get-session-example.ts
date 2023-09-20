import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  if (session) {
    // Signed in
    res.json({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    // Not Signed in
    res.json({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
  res.end();
};
