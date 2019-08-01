import React, { Component, Fragment } from 'react';
import AppContainer from './AppContainer';
import { Root, ForkGithub } from './styles';

const RootContainer = () => (
    <Fragment>
        <ForkGithub>
            <a className="fork-link" href="https://github.com/kis/chartify" target="_blank">Fork me on GitHub</a>
        </ForkGithub>

        <Root>
            <header className="container">
                <div className="project-title">
                    <h2 className="main-header">Chartify</h2>
                    <h4 className="sub-header">React.js plugin for building customizable charts</h4>
                </div>
            </header>

            <main className="container">
                <AppContainer />
            </main>

            <footer className="container">
                <div className="footer-text">
                    Made with <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2000px-Love_Heart_symbol.svg.png" title="love" /> Inspired by <a href="http://kinopoisk.ru" target="_blank">kinopoisk</a>
                </div>
            </footer>
        </Root>
    </Fragment>
);

export default RootContainer;
