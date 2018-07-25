import React from 'react';
import profilePhoto from "../images/profile_400x400.jpg";

class Header extends React.Component {
    render() {
        return (
        <div className="cabecera">
          <img
            className="photo"
            src={profilePhoto}
            alt="Profile Photo"
          />
          <div className="info">
            <h1 className="titulo">Verónica Bautista</h1>
            <p className="fecha">Lunes 23 de julio de 2018</p>
          </div>
        </div>
      );
    }
  }
export default Header;