import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={session.user?.image!}
            width={50}
            height={50}
            priority
            alt="profile image"
          />
        </div>
        <button className="button is-dark" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      <button className="button is-dark" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
