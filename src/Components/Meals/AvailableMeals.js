import React from "react";
import style from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealListItem from "./MealItem/MealListItem";

import { DUMMY_MEALS } from "./dummy-meals";

export default function AvailableMeals() {
  return (
    <section className={style.meals}>
      <ul>
        {DUMMY_MEALS &&
          DUMMY_MEALS.map((meal, index) => (
            <Card>
              <MealListItem
                mealName={meal.name}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                id={meal.id}
              />
            </Card>
          ))}
      </ul>
    </section>
  );
}
