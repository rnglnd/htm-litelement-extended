import { html } from '@polymer/lit-element';

export default (name, items, addItem) => {
  return html`
    <section class=${name.toLowerCase()}>
      <h3 class="main-header">${name}</h3>
      <ul class="main-list">
        ${items.map((item) => html`
          <li class="main-item" @click=${() => addItem(item)}>
            <span>${item.description}</span><span>£${item.price}</span>
          </li>
        `)}
      </ul>
    </section>
  `;
};
