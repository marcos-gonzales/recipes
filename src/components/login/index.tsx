import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
            <Image src="icon.png" height={50} alt="recipe icon" width={50} />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <div className="flex">
                  <Image
                    src={session.user?.image!}
                    width={50}
                    height={50}
                    priority
                    alt="profile image"
                  />
                </div>
              </a>
              <button onClick={() => signOut()} className="button is-light">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar is-dark" role="navigation">
      <div className="navbar-brand">
        <Link
          className="navbar-item"
          href="/"
          style={{ margin: "0", padding: "0" }}
        >
          <Image src="/icon.png" height={20} alt="recipe icon" width={100} />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <div className="flex">Login</div>
            </a>
            <button onClick={() => signIn()} className="button is-light">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
