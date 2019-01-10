import { html } from '@polymer/lit-element';

export default (name, items, addItem) => {
  return html`
    <style>
      .main-header {
        justify-self: center;
        margin-top: 0;
      }

      .main-list {
        padding: 0;
        margin: 0;
        cursor: pointer;
      }
      
      .main-item {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }

      span {
        font-size: 16px;
      }

      @media only screen and (min-width: 600px) {
        .main-item {
          margin-bottom: 0px;
        }
      }
    </style>
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
