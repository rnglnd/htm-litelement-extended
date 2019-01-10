import { html } from '@polymer/lit-element';

export default (basket, removeItem, total) => (
  html`
    <section class="basket">
      <span class="title"><span>Quantity</span><span>Price</span></span>
      <ul class="basket-list">
        ${basket.map((item) => html`
          <li class="basket-item" @click=${() => removeItem(item)}>
            <span>${item.quantity}</span><span>£${item.price}</span>
          </li>
        `)}
      </ul>
      <span class="total"><span>Total</span><span>£${total}</span></span>
    </section>
  `
);
