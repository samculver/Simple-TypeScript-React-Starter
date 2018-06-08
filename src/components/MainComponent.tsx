import * as React from 'react';
import '../Styles.scss';
import { IAppProps } from '../IModels';

export default class MainComponent extends React.Component<IAppProps, {}>{
    public render() {
        return (
            <div className="app-container">
                <div className="app-content">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}