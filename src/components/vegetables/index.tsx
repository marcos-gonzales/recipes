import React from "react";

type indexProps = {
  setIngredients: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        checked: boolean;
      }[]
    >
  >;
};

const index: React.FC<indexProps> = ({ setIngredients }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
    >
      <label htmlFor="broccoli" className="has-text-success">
        Broccoli &nbsp;
        <input
          type="checkbox"
          name="broccoli"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "broccoli",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "broccoli")
              );
            }
          }}
        />
      </label>
      <label htmlFor="carrots" className="has-text-success">
        Carrot &nbsp;
        <input
          type="checkbox"
          name="onion"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "carrots",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "carrots")
              );
            }
          }}
        />
      </label>
      <label htmlFor="onion" className="has-text-success">
        Onion &nbsp;
        <input
          type="checkbox"
          name="onion"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "onion",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "onion")
              );
            }
          }}
        />
      </label>
      <label htmlFor="potato" className="has-text-success">
        Potato &nbsp;
        <input
          type="checkbox"
          name="potato"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "potato",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "potato")
              );
            }
          }}
        />
      </label>
      <label htmlFor="spinach" className="has-text-success">
        Spinach &nbsp;
        <input
          type="checkbox"
          name="spinach"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "spinach",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "spinach")
              );
            }
          }}
        />
      </label>
      <label htmlFor="lettuce" className="has-text-success">
        lettuce &nbsp;
        <input
          type="checkbox"
          name="lettuce"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "lettuce",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "lettuce")
              );
            }
          }}
        />
      </label>
      <label htmlFor="peas" className="has-text-success">
        Peas &nbsp;
        <input
          type="checkbox"
          name="peas"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "peas",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "peas")
              );
            }
          }}
        />
      </label>
      <label htmlFor="tomatoes" className="has-text-success">
        Tomatoes &nbsp;
        <input
          type="checkbox"
          name="tomatoes"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "tomatoes",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "tomatoes")
              );
            }
          }}
        />
      </label>
      <label htmlFor="bell_peppers" className="has-text-success">
        Bell peppers &nbsp;
        <input
          type="checkbox"
          name="bell_peppers"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "bell_peppers",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "bell_peppers")
              );
            }
          }}
        />
      </label>
      <label htmlFor="cucumbers" className="has-text-success">
        Cucumbers &nbsp;
        <input
          type="checkbox"
          name="cucumbers"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "cucumbers",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "cucumbers")
              );
            }
          }}
        />
      </label>
      <label htmlFor="celery" className="has-text-success">
        Celery &nbsp;
        <input
          type="checkbox"
          name="celery"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "celery",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "celery")
              );
            }
          }}
        />
      </label>
      <label htmlFor="mushrooms" className="has-text-success">
        Mushrooms &nbsp;
        <input
          type="checkbox"
          name="mushrooms"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "mushrooms",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "mushrooms")
              );
            }
          }}
        />
      </label>
      <label htmlFor="corn" className="has-text-success">
        Corn &nbsp;
        <input
          type="checkbox"
          name="corn"
          onChange={(e) => {
            if (e.target.checked) {
              setIngredients((prev) => [
                ...prev,
                {
                  name: "corn",
                  checked: true,
                },
              ]);
            } else {
              setIngredients((prev) =>
                prev.filter((ingredient) => ingredient.name !== "corn")
              );
            }
          }}
        />
      </label>
    </div>
  );
};
export default index;
