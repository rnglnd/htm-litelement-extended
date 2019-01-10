import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const Section = ({ title, items, addItem }) => html`
  <section class=${title.toLowerCase()}>
    <h3 class="main-header">${title}</h3>
    <ul class="main-list">
      ${items.map((item) => html`
        <li key=${item.id} class="main-item" onClick=${() => addItem(item)}>
          <span>${item.description}</span><span>£${item.price}</span>
        </li>
      `)}
    </ul>
  </section>
`;

export default Section;
