import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import './styles.css';
export class LaunchView extends React.Component{
    state = {
        launchView:{}
    }
    componentDidMount = () =>{
        this.getLaunchView()
    }
    getLaunchView = () => {
        const flight_number = this.props.match.params.flight_number;
        axios.get('https://api.spacexdata.com/v3/launches/'+flight_number).then((response) => {
            this.setState({
                launchView: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    launchAttribute = (title, key) => {
        const value = this.state.launchView[key]
        return (
            <div className="attribute">
                <h1>{title}</h1>
                <h1> {value}</h1>
            </div>
        )
    }
    render(){
        return (
            <div className="launch-view">
                {this.launchAttribute('Flight number','flight_number')}
                {this.launchAttribute('Mission Name','mission_name')}
                {this.launchAttribute('Launch Date','launch_date_local')}
                <p className="description">{this.state.launchView.details}</p>
            </div>
        
        )
    }
}
export default withRouter(LaunchView)