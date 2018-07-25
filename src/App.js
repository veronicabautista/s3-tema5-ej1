import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const cabecera = (
      <div className="cabecera">
        <img
          className="photo"
          src="https://pbs.twimg.com/profile_images/1014159382936989696/aUVB6tF__400x400.jpg"
        />
        <div className="info">
          <h1 className="titulo">Sandra García</h1>
          <p className="fecha">Lunes 23 de julio de 2018</p>
        </div>
      </div>
    );
    const card = (
      <div className="App">
        {cabecera}
        <div className="texto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aptent, vel
            quis himenaeos class venenatis ligula diam est mauris, quam libero
            lobortis at duis semper tellus. Laoreet netus malesuada parturient
            massa sociis molestie curae nec, gravida fusce hac id nostra urna in
            imperdiet, sed metus posuere ante enim per lectus. Auctor viverra
            suscipit platea quam per nam egestas donec, ornare tincidunt hac
            odio fames nulla a, scelerisque netus dis justo aptent eu
            consequat.Nostra ac convallis quam mi pretium nisl at ridiculus
            faucibus accumsan, nec platea nunc dictumst volutpat imperdiet felis
            velit tortor. Non varius venenatis mauris ornare pellentesque porta
            purus magnis leo odio tempor mi rutrum ultricies tellus molestie,
            dui gravida vulputate rhoncus pulvinar primis placerat commodo id
            vehicula consequat nullam nunc luctus tristique. A vestibulum
            himenaeos tristique mattis aenean cras nec habitant, dis fermentum
            et varius quis ultricies lacus consequat vulputate, arcu est euismod
            nisl proin purus maecenas.
          </p>
        </div>
        <div className="footer">
          <p className="read">Leer más...</p>
          <div>
            <p className="likes">
              37<i class="fas fa-heart" />
            </p>
          </div>
        </div>
      </div>
    );
    return card;
  }
}

export default App;
