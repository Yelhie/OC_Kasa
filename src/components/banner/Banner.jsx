import React from 'react';
import BannerAbout from '../../assets/banner_about.png';
import BannerHome from '../../assets/banner_home.png';
import './banner.scss';

// Associe chaque page à un texte/posibilité d'ajouter différent texte par banner
const bannerTexts = {
    home: 'Chez vous, partout et ailleurs',
    about: '',
};

export const HOME = "home"
export const ABOUT = "about"

// Déclare la constante Banner avec la propriété page
const Banner = ({ page }) => {
    // Choix de la bannière en fonction de la page
    const chooseBanner = () => {
        switch (page) {
            case HOME:
                return BannerHome;
            case ABOUT:
                return BannerAbout;
            // Si aucun lien vers une bannière, affiche BannerHome par défaut
            default:
                return BannerHome;
        }
    };

    return (
        <div className='banner'>
            <img className='banner_img' src={chooseBanner()} alt={`Bannière de la catégorie ${page}.`} />
            <p className='banner_txt'>{bannerTexts[page]}</p>
        </div>
    );
};

export default Banner;