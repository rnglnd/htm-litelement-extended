import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const Address = () => html`
  <section class="address">
    <p>112 Market Square</p>
    <p>Dungannon</p>
    <p>Tyrone</p>
    <p>Northern Ireland</p>
  </section>
`;

export default Address;
