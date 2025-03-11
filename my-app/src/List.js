import React from "react";
import { recipes } from "./Data.js";

export default function List() {
    const listItems = recipes.map(recipe => 
        <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients.map(function (ingredient, index) {
                return <li key={index}>{ingredient}</li>;
            })}</p>
        </li>
    );

    return <div classList="List">
        <form>
            <input type="text" />
            <button type="submit">Add</button>
        </form>
        <ul>{listItems}</ul>
    </div>
}