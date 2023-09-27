import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="columns">
      <div className="column is-half">
        <Image
          src="/food.jpg"
          alt="food"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </div>
      <div className="typewriter">
        <p className="first">
          I have chicken, rice, broccoli, carrots, what can i make?
        </p>
        <p className="second">
          I have eggs, lettuce, bone broth, what can i make?
        </p>

        <p className="third">I have beef, potatoes, onions, what can i make?</p>

        <p className="fourth">
          I have chicken, rice, broccoli, carrots, what can i make?
        </p>
        <button
          className="button is-dark signin"
          onClick={() =>
            signIn(undefined, {
              callbackUrl: "/recipes",
            })
          }
        >
          <i className="fa-solid fa-plate-utensils"></i> Find Recipes
        </button>
      </div>
    </div>
  );
}
