import React, { useState } from "react";
import Vegetables from "@/components/vegetables";
import Meats from "@/components/meats";
import Poultry from "@/components/poultry";
import Dairy from "@/components/dairy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const [ingredients, setIngredients] = useState([
    {
      name: "broccoli",
      checked: false,
    },
    {
      name: "carrots",
      checked: false,
    },
    {
      name: "onion",
      checked: false,
    },
    {
      name: "potato",
      checked: false,
    },
    {
      name: "spinach",
      checked: false,
    },
    {
      name: "lettuce",
      checked: false,
    },
    {
      name: "peas",
      checked: false,
    },
    {
      name: "ground_beef",
      checked: false,
    },
    {
      name: "steak",
      checked: false,
    },
  ]);
  const [vegetables, setVegetables] = useState(false);
  const [meats, setMeats] = useState(false);
  const [poultry, setPoultry] = useState(false);
  const [data, setData] = useState(null);
  const [dairy, setDairy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function findRecipes(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    let response = await fetch("api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredients),
    });

    setData(await response.json());
    setIsLoading(false);
  }

  return (
    <div className="container is-fluid ">
      {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
      <div className="title is-6 is-flex" style={{ gap: ".25rem;" }}>
        What ingredients do you have in your fridge?
        <i className="fa-solid fa-carrot"></i>
        <i className="fa-solid fa-onion"></i>
        <i className="fa-solid fa-garlic"></i>
      </div>

      <form onSubmit={findRecipes} style={{ display: "flex", gap: "1rem" }}>
        <label htmlFor="vegetables" color>
          Vegetables &nbsp;
          <input
            id="vegetables"
            type="checkbox"
            name="vegetables"
            onChange={(e) => setVegetables(e.target.checked)}
          />
        </label>
        {vegetables && <Vegetables setIngredients={setIngredients} />}
        <label htmlFor="meats">
          Meats &nbsp;
          <input
            id="meats"
            type="checkbox"
            name="meats"
            onChange={(e) => setMeats(e.target.checked)}
          />
        </label>
        {meats && <Meats setIngredients={setIngredients} />}
        <label htmlFor="poultry">
          Poultry &nbsp;
          <input
            id="poultry"
            type="checkbox"
            name="poultry"
            onChange={(e) => setPoultry(e.target.checked)}
          />
        </label>
        {poultry && <Poultry setIngredients={setIngredients} />}
        <label htmlFor="dairy">
          Dairy &nbsp;
          <input
            id="dairy"
            type="checkbox"
            name="dairy"
            onChange={(e) => setDairy(e.target.checked)}
          />
        </label>
        {dairy && <Dairy setIngredients={setIngredients} />}
        <button className="button is-dark">Find Recipes</button>
      </form>
      <section className="section">
        {!data && isLoading ? (
          <span className="bulma-loader-mixin"></span>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: data?.response }} />
        )}
      </section>
    </div>
  );
};
export default index;
