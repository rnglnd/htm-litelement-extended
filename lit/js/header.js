import { html } from '@polymer/lit-element';

export default () => html`
  <style>
    .header {
      border: 5px double red;
      padding: 10px 0px;
      border-radius: 5px;
      margin: 0;
      text-align: center;
      font-family: Impact;
      font-style: italic;
    }
  </style>
  <h1 class="header">
    Stevie's chippy
  </h1>
`;
