import { html } from '@polymer/lit-element';

export default (basket, removeItem, total) => (
  html`
    <style>
      .basket {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border: 1px solid red;
        border-radius: 5px;
        padding: 15px;
      }
      
      .title {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
      }

      .total {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid red;
      }

      span {
        font-size: 16px;
      }

      .basket-list {
        padding: 0;
        margin: 0;
        cursor: pointer;
      }
      
      .basket-item {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }

      @media only screen and (min-width: 600px) {
        .basket-item {
          margin-bottom: 0px;
        }
      }
    </style>
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
