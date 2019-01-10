import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const Header = () => html`
  <h1 class="header">
    Stevie's chippy
  </h1>
`;

export default Header;
