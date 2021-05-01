import React from 'react';
import { Launch } from '../Launch/Launch.jsx';
import './styles.css';
import axios from 'axios';
import { Link } from "react-router-dom";
export class LaunchesList extends React.Component{
    state = {
        launches:[]
    }
    componentDidMount = () =>{
        this.getlaunches()
    }
    getlaunches = () =>{
        axios.get('https://api.spacexdata.com/v3/launches')
        .then((response) => {
            this.setState(
                {launches: response.data}
            )
        })
        .catch((error) => {
            console.log(error);
        })
    }
    allLaunchList = () =>{
        const launchListComponents = this.state.launches.map((launch,index) =>{
            const luanch_iamge = launch.links.flickr_images[0] ? launch.links.flickr_images[0]:'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80';
            return (
                <Link key = {'launch_'+index} to={'/LaunchView/'+launch.flight_number}>
                <Launch 
                banner={luanch_iamge}
                title ={launch.mission_name}
                date = {launch.launch_date_local}
                description={launch.details}
                />
            </Link>
            )
        })

        return launchListComponents;
    }
    render(){
        return(
            <div className ="launches-list">
                { this.allLaunchList() }
            </div>
        )
    }
}