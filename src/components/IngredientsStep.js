import React from 'react';
import PropTypes from 'prop-types';

function IngredientsStep(props) {
  const { value: { url, id, recipeIngredientsList, missingIngredients } } = props;

  function handleClick(event) {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!event.target.nextSibling.classList.value) {
      event.target.nextSibling.classList.toggle('tachado');
      missingIngredients[event.target.value] = '';
    } else {
      event.target.nextSibling.classList = '';
      missingIngredients[event.target.value] = `${event.target.value}`;
    }
    if (url.match(/comidas/gi)) {
      inProgress.meals[id] = missingIngredients;
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    } else {
      inProgress.cocktails[id] = missingIngredients;
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    }
  }

  return (
    <div
      className="ingredients-step"
    >
      <h5>Ingredients</h5>
      <ul className="ingredients-list">
        {recipeIngredientsList.map((entry, index) => {
          if (index === parseInt(missingIngredients[index], 10)) {
            return (
              <li key={ index }>
                <input
                  value={ index }
                  type="checkbox"
                  data-testid={ `${index}-ingredient-step` }
                  onClick={ handleClick }
                />
                <label htmlFor={ index }>{ entry }</label>
              </li>
            );
          }
          return (
            <li key={ index }>
              <input
                value={ index }
                type="checkbox"
                data-testid={ `${index}-ingredient-step` }
                onClick={ handleClick }
                checked
              />
              <label
                className="tachado"
                htmlFor={ index }
              >
                { entry }
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

IngredientsStep.propTypes = {
  value: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default IngredientsStep;
