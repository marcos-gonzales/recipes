import React, { useState } from "react";
import Vegetables from "@/components/vegetables";
import Meats from "@/components/meats";
import Poultry from "@/components/poultry";
import Dairy from "@/components/dairy";
import Seafood from "@/components/seafood";
import SomethingSpecific from "@/components/something-specific";
import { getServerSession } from "next-auth/next";
import Pagination from "rc-pagination";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

type indexProps = {
  recipes: any;
  session: any;
};

interface Ingredient {
  name: string;
  checked: boolean;
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log("session", session.id);
  const url =
    process.env.ENVIRONMENT == "local"
      ? "http://localhost:3000"
      : "https://recipe-ai.vercel.app";
  const res = await fetch(`${url}/api/ai?id=${session.id}`, {
    method: "get",
  });
  const recipes = await res.json();
  return {
    props: {
      recipes: recipes,
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}

const Index: React.FC<indexProps> = ({ recipes }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [cuisine, setCuisine] = useState({ name: "", checked: false });
  const [vegetables, setVegetables] = useState(false);
  const [meats, setMeats] = useState(false);
  const [poultry, setPoultry] = useState(false);
  const [data, setData] = useState<{ response: string | null }>({
    response: null,
  });
  const [dairy, setDairy] = useState(false);
  const [seafood, setSeafood] = useState(false);
  const [somethingSpecific, setSomethingSpecific] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const [perPage, setPerPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = (value: any) => {
    setSize(value);
    const newPerPage = Math.ceil(recipes.recipes.recipes.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current: any, pageSize: any) => {
    return recipes.recipes.recipes.slice(
      (current - 1) * pageSize,
      current * pageSize
    );
  };

  const PaginationChange = (page: any, pageSize: any) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current: any, type: any, originalElement: any) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };

  async function aiRecipe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    let response = await fetch("api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([ingredients, cuisine, session]),
    });

    setData(await response.json());
    setIsLoading(false);
  }
  return (
    <div className="container is-fluid">
      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="title is-6 is-flex"
          style={{ gap: ".25rem; align-items: center" }}
        >
          What&apos;s in your fridge?
          <i className="fa-solid fa-tomato fa-lg has-text-danger"></i>
          <i className="fa-solid fa-broccoli fa-lg has-text-success"></i>
          <i
            className="fa-solid fa-lemon fa-lg"
            style={{ color: "#E4D00A" }}
          ></i>
        </div>

        <form
          onSubmit={aiRecipe}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <label htmlFor="vegetables" className="has-text-success-dark">
            Vegetables <i className="fa-solid fa-carrot"></i> &nbsp;
            <input
              id="vegetables"
              type="checkbox"
              name="vegetables"
              onChange={(e) => setVegetables(e.target.checked)}
            />
          </label>
          {vegetables && <Vegetables setIngredients={setIngredients} />}
          <label htmlFor="meats" className="has-text-danger-dark">
            Meats <i className="fa-solid fa-steak"></i> &nbsp;
            <input
              id="meats"
              type="checkbox"
              name="meats"
              onChange={(e) => setMeats(e.target.checked)}
            />
          </label>
          {meats && <Meats setIngredients={setIngredients} />}
          <label htmlFor="poultry" className="has-text-warning-dark">
            Poultry <i className="fa-solid fa-drumstick"></i> &nbsp;
            <input
              id="poultry"
              type="checkbox"
              name="poultry"
              onChange={(e) => setPoultry(e.target.checked)}
            />
          </label>

          {poultry && <Poultry setIngredients={setIngredients} />}
          <label htmlFor="dairy" className="has-text-info-dark">
            Dairy <i className="fa-solid fa-cheese"></i> &nbsp;
            <input
              id="dairy"
              type="checkbox"
              name="dairy"
              onChange={(e) => setDairy(e.target.checked)}
            />
          </label>
          {dairy && <Dairy setIngredients={setIngredients} />}

          <label htmlFor="seafood" style={{ color: "#AA336A" }}>
            Seafood <i className="fa-solid fa-fish"></i> &nbsp;
            <input
              id="seafood"
              type="checkbox"
              name="seafood"
              onChange={(e) => setSeafood(e.target.checked)}
            />
          </label>
          {seafood && <Seafood setIngredients={setIngredients} />}

          <label htmlFor="something_specific" style={{ color: "#FF69B4" }}>
            Cuisine <i className="fa-solid fa-cauldron"></i> &nbsp;
            <input
              id="something_specific"
              type="checkbox"
              name="something_specific"
              onChange={(e) => setSomethingSpecific(e.target.checked)}
            />
          </label>
          {somethingSpecific && (
            <SomethingSpecific setCuisine={setCuisine} cuisine={cuisine} />
          )}
          <button className="button is-dark">
            <i className="fa-solid fa-plate-utensils"></i> &nbsp; Find Recipes
          </button>
        </form>
      </div>
      <section className="section">
        {!data && isLoading ? (
          <span className="bulma-loader-mixin"></span>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: data?.response || "" }} />
        )}
      </section>
      <div>
        <section>
          <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
            Previous Recipes
          </h2>
          <div>
            {getData(current, size).map((data: any, index: any) => {
              return (
                <div
                  key={data.id}
                  dangerouslySetInnerHTML={{ __html: data.data }}
                ></div>
              );
            })}
          </div>
          <Pagination
            className="pagination-data"
            showTotal={(total, range) =>
              `Showing ${range[0]}-${range[1]} of ${total}`
            }
            onChange={PaginationChange}
            total={recipes.recipes.recipes.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
          />
        </section>
      </div>
    </div>
  );
};
export default Index;
