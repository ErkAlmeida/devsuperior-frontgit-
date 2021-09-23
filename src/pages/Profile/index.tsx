import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonP from "../../core/components/ButtonP";
import { UserGit } from "../../core/type/UserGit";
import { makeRequest } from "../../core/utils/request";
import ImageLoader from "./components/Loaders/ImageLoader";
import InfoLoader from "./components/Loaders/InfoLoader";
import "./styles.scss"

type FormState = {
    userName?: string
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Profile = () => {

    const [isStatus, setIsStatus] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const [userGit, setUserGit] = useState<UserGit>({
        followers: 0,
        avatar_url: '',
        html_url: ''
    });

    const [formData, setFormData] = useState<FormState>({
        userName: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const userName = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [userName]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            ...formData
        }

        setIsLoading(true);
        setIsStatus(false);
        makeRequest({ url: `/users/${payload.userName}`, method: 'GET' })
            .then(response => setUserGit(response.data))
            .finally(() => setIsLoading(false))
            .finally(() => setIsStatus(false));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="profile-container">

                    <div className="profile-container-form">
                        <h1>Encontre um perfil Github</h1>
                        <input
                            value={formData.userName}
                            name="userName"
                            type="text"
                            className="profile-imput-form"
                            onChange={handleOnChange}
                            placeholder="Usuário Github"
                        />
                        <ButtonP text="Encontrar" />
                    </div>
                </div>
                {isStatus ? "" : (
                    <>
                        <div className="profile-container-return">
                            {isLoading ? <ImageLoader /> : (
                                <>
                                    <div className="profile-img">
                                        <img src={userGit?.avatar_url} className="profile-avatar-url" alt="img-git" />
                                        <Link to={userGit.html_url}>
                                            <ButtonP text="Ver Perfil" />
                                        </Link>
                                    </div>
                                </>
                            )}

                            {isLoading ? <InfoLoader /> : (
                                <>
                                    <div>
                                        <div className="profile-list-data-title">
                                            <input className="profile-list-data-input-head" type="label" value={`Repositórios públicos: ${userGit.public_repos}`} />
                                            <input className="profile-list-data-input-head" type="label" value={`Seguidores: ${userGit.followers}`} />
                                            <input className="profile-list-data-input-head" type="label" value={`Seguindo: ${userGit.following}`} />
                                        </div>
                                        <div className="profile-get-data">
                                            <h5 className="title-form">Informações</h5>
                                            <input className="profile-list-data-input" type="label" value={`Empresa: ${userGit.company}`} />
                                            <input className="profile-list-data-input" type="label" value={`Website/Blog: ${userGit.blog}`} />
                                            <input className="profile-list-data-input" type="label" value={`Localidade: ${userGit.location}`} />
                                            <input className="profile-list-data-input" type="label" value={`Membro desde: ${userGit.created_at}`} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </>
                )}
            </div>
        </form>
    )
};

export default Profile;