import React, { useState } from "react";
import Vegetables from "@/components/vegetables";
import Meats from "@/components/meats";
import Poultry from "@/components/poultry";
import Dairy from "@/components/dairy";
import Seafood from "@/components/seafood";
import SomethingSpecific from "@/components/something-specific";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  const [ingredients, setIngredients] = useState([]);
  const [cuisine, setCuisine] = useState({ name: "", checked: false });
  const [vegetables, setVegetables] = useState(false);
  const [meats, setMeats] = useState(false);
  const [poultry, setPoultry] = useState(false);
  const [data, setData] = useState(null);
  const [dairy, setDairy] = useState(false);
  const [seafood, setSeafood] = useState(false);
  const [somethingSpecific, setSomethingSpecific] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function findRecipes(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    let response = await fetch("api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredients, cuisine),
    });

    setData(await response.json());
    setIsLoading(false);
  }

  return (
    <div className="container is-fluid ">
      {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
      <div className="title is-6 is-flex" style={{ gap: ".25rem;" }}>
        What ingredients do you have in your fridge?
        <i className="fa-solid fa-carrot has-text-danger"></i>
        <i className="fa-solid fa-broccoli has-text-success"></i>
        <i className="fa-solid fa-lemon" style={{ color: "#E4D00A	" }}></i>
      </div>

      <form onSubmit={findRecipes} style={{ display: "flex", gap: "1rem" }}>
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