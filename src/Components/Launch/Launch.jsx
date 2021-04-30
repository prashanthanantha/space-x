import React from 'react';
import './styles.css';
export class Launch extends React.Component{
    render(){
        return (
            <div className="Launch">
                <img src={this.props.banner} />
                <div className="content">
                    <div className="info">
                <h1>{this.props.title}</h1>
                <h4>{this.props.date}</h4>
                </div>
                <p>{this.props.description}
                </p>
                </div>
            </div>
        )
    }
}