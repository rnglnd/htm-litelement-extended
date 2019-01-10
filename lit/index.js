import { LitElement, html } from '@polymer/lit-element';
import { chipItems, burgerItems, chickenItems, sideItems } from '../menuItems';
import renderHeader from './js/header';
import renderSection from './js/section';
import renderAddress from './js/address';
import renderBasket from './js/basket';

class LitChippy extends LitElement {
  static get properties() {
    return {
        basket: { type: Array }
      };
    }
  constructor() {
    super();
    this.basket = [];
  }

  addItem({ id, description, price }) {
      const item = this.basket.find((findItem) => findItem.id === id);
      
      if (item) {
        const newBasket = this.basket.filter((findItem) => findItem.id !== id);
        return this.basket = [...newBasket, { id, description, price, quantity: item.quantity + 1 }];
      }

      return this.basket = [...this.basket, { id, description, price, quantity: 1 }];
  }

  removeItem({ id, description, price, quantity }) {
    if (quantity > 1) {
      const newBasket = this.basket.filter((findItem) => findItem.id !== id);
      return this.basket = [...newBasket, { id, description, price, quantity: quantity - 1 }];
    }

    return this.basket = this.basket.filter((findItem) => findItem.id !== id);
  }
  
  get total() {
    return this.basket.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  render() {
    const total = this.total;
    return html`
      <style>
        .header { grid-area: header; }
        .main { grid-area: main; }
        .address { grid-area: address; }
        .basket { grid-area: basket; }
        .chips { grid-area: chips; }
        .burgers { grid-area: burgers; }
        .chicken { grid-area: chicken; }
        .sides { grid-area: sides; }

        .container {
          max-width: 900px;
          display: grid;
          grid-template-areas:
          'header header'
          'main address'
          'main basket'
          'main basket';
          grid-gap: 10px;
          margin: 4px;
        }

        .main {
          display: grid;
          grid-template-areas:
          'chips'
          'burgers'
          'chicken'
          'sides';
          border: 5px double red;
          padding: 10px 20px;
          border-radius: 5px;
          grid-gap: 10px;
        }

        @media only screen and (min-width: 600px) {
          .container {
            max-width: 900px;
            grid-template-areas:
            'header header header'
            'main main address'
            'main main basket';
            grid-gap: 10px;
            margin: 8px;
          }
        
          .main {
            grid-template-areas:
            'chips burgers'
            'chicken sides';
          }
        }
      </style>
      <div class="container">
        ${renderHeader()}
        <div class="main">
          ${renderSection('Chips', chipItems, this.addItem.bind(this))}
          ${renderSection('Burgers', burgerItems, this.addItem.bind(this))}
          ${renderSection('Chicken', chickenItems, this.addItem.bind(this))}
          ${renderSection('Sides', sideItems, this.addItem.bind(this))}
        </div>
        ${renderAddress()}
        ${renderBasket(this.basket, this.removeItem.bind(this), total)}
      </div>
    `;
  }
};

customElements.define('lit-chippy', LitChippy);
