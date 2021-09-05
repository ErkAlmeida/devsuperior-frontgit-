import React from "react";
import ButtonP from "../../core/components/ButtonP";
import "./styles.scss"

const Profile =() => {

    return (
        <div className="home-container">
           
            <div className="home-container-form">
                <h1>Encontre um perfil Github</h1>
                <input type="text" className="imput-form" placeholder="Usuário Github"></input>
                <ButtonP text="Encontrar"/>
            </div>

        </div>
        
    )
};

export default Profile;