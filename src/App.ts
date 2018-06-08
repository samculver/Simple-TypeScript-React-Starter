import * as React from 'react';
import * as ReactDom from 'react-dom';
import MainComponent from './components/MainComponent';
import './Styles.scss';
import { IAppProps } from './IModels';

const element: React.ReactElement<IAppProps> = React.createElement(
    MainComponent,
    {
        heading: 'Hello App Developer!',
        description: 'Edit your App.ts file to change this text.'
    }
);

document.addEventListener("DOMContentLoaded", () => {
    const domElement = document.getElementById('App');
    ReactDom.render(element, domElement);
});