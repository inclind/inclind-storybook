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
  <iron-image style="width:400px; height:400px;" placeholder="data:image/gif;base64,..."
  sizing="cover" preload fade src="${imgSrc}"></iron-image>
  `;
};
