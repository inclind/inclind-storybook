import { html } from 'lit-html';
import '@polymer/iron-image/iron-image.js';

import './image.css';

/**
 * Primary UI component for user interaction
 */
export const Image = ({
  imgSrc,
  imgAlt,
}) => {

  return html `
  <iron-image sizing="cover" preload fade src="${imgSrc}"></iron-image>
  `;
};
