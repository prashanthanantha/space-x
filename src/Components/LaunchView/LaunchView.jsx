import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import './styles.css';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const zoomOutProperties = {
indicators: true,
scale: 0.4
}
export class LaunchView extends React.Component{
    
    state = {
        launchView:{
            links:{
                flickr_images:[]
            }
        }
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
       // const this.state.launchView.links.flickr_images = this.state.launchView.links.flicker_images[0] ? this.state.launchView.links.flicker_images:'https://cdn.geekwire.com/wp-content/uploads/2020/05/20200530_SpaceX_Launch_212-630x450.jpg';
        //console.log(this.state.launchView.links.flickr_images)
       
        var hasImages = this.state.launchView.links.flickr_images.length > 0;
        return (
            <div className="launch-view">
                {this.launchAttribute('Flight number','flight_number')}
                {this.launchAttribute('Mission Name','mission_name')}
                {this.launchAttribute('Launch Date','launch_date_local')}
                {
                hasImages && (
                <Zoom {...zoomOutProperties}>
                {this.state.launchView.links.flickr_images.map((each, index) => (
                <div key={index} style={{width: "100%"}}>
                <img  alt="launche_view" style={{ objectFit: "cover", width: "100%" }} src={each} />
                </div>
                ))}
                </Zoom>
                )
                
                }
                <p className="description">{this.state.launchView.details}</p>
            </div>
        )
    }
}
export default withRouter(LaunchView)