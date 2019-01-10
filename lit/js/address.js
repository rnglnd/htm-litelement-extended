import { html } from '@polymer/lit-element';

export default () => html`
  <style>
    .address {
      background-color: rgba(255,0,0,0.2);
      padding: 15px;
      border-radius: 5px;
      height: fit-content;
    }
    
    .address > p {
      font-size: 16px;
      margin: 5px 0;
    }
  </style>
  <section class="address">
    <p>112 Market Square</p>
    <p>Dungannon</p>
    <p>Tyrone</p>
    <p>Northern Ireland</p>
  </section>
`;