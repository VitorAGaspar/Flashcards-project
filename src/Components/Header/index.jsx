import React from 'react';

import './style.css';

const Header = () => {
    return (
        <>
            <header className="c-header">
                <img
                    className="c-logo"
                    src="./src/Assets/Logo-white.svg"
                    alt="Logotipo com um raio amarelo ao lado esquerdo seguido pela palavra cards"
                />
            </header>
        </>
    );
};

export default Header;
