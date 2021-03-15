import { html } from 'lit-html';

import './recipecard.css';

/**
 * Primary UI component for user interaction
 */
export const RecipeCard = ({
  primary,
  backgroundColor,
  size,
  label,
  imgSrc,
  imgAlt,
  description,
  onClick
}) => {
  const mode = primary ? 'recipe-card primary' : 'recipe-card secondary';

  return html `
    <recipecard
      class=${['recipe-card', `recipe-card--${size || 'medium'}`, mode].join(' ')}
      style=${backgroundColor && { backgroundColor }}
      @click=${onClick}
    >
    <img src="${imgSrc}" alt="${imgAlt}" />
    <div class="card-content">
      <h2>${label}</h2>
      <p>${description}</p>
      </div>
    </recipecard>
  `;
};
