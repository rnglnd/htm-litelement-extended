import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const Address = ({ basket, removeItem }) => {
  const total = basket.reduce((total, item) => total + (item.quantity * item.price), 0);

  return (
    html`
      <section class="basket">
        <span class="title"><span>Quantity</span><span>Price</span></span>
        <ul class="basket-list">
          ${basket.map((item) => html`
            <li class="basket-item" onClick=${() => removeItem(item)}>
              <span>${item.quantity}</span><span>£${item.price}</span>
            </li>
          `)}
        </ul>
        <span class="total"><span>Total</span><span>£${total}</span></span>
      </section>
    `
  );
};

export default Address;
