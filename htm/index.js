import { h, Component, render } from 'preact';
import htm from 'htm';
import { chipItems, burgerItems, chickenItems, sideItems } from '../menuItems';
import Header from './js/Header';
import Section from './js/Section';
import Address from './js/Address';
import Basket from './js/Basket';

const html = htm.bind(h);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { basket: [] };
  }

  addItem({ id, description, price }) {
    this.setState(({ basket }) => {
      const item = basket.find((findItem) => findItem.id === id);
      
      if (item) {
        const newBasket = basket.filter((findItem) => findItem.id !== id);
        return { basket: [...newBasket, { id, description, price, quantity: item.quantity + 1 }] };
      }

      return { basket: [...basket, { id, description, price, quantity: 1 }] };
    });
  }

  removeItem({ id, description, price, quantity }) {
    this.setState(({ basket }) => {
      if (quantity > 1) {
        const newBasket = basket.filter((findItem) => findItem.id !== id);
        return { basket: [...newBasket, { id, description, price, quantity: quantity - 1 }] };
      }

      return { basket: basket.filter((findItem) => findItem.id !== id) };
    });
  }

  render({}, { basket }) {
    let total = 0;
    basket.map((item) => total = total + (item.quantity * item.price));

    return html`
      <div class="container">
        <${Header} />
        <div class="main">
          <${Section}
            title="Chips"
            items=${chipItems}
            addItem=${this.addItem.bind(this)}
          />
          <${Section}
            title="Burgers"
            items=${burgerItems}
            addItem=${this.addItem.bind(this)}
          />
          <${Section}
            title="Chicken"
            items=${chickenItems}
            addItem=${this.addItem.bind(this)}
          />
          <${Section}
            title="Sides"
            items=${sideItems}
            addItem=${this.addItem.bind(this)}
          />
        </div>
        <${Address} />
        <${Basket}
          basket=${basket}
          removeItem=${this.removeItem.bind(this)}
        />
      </div>
    `;
  }
};

render(html`<${App} />`, document.body);
