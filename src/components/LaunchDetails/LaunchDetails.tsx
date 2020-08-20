import React from 'react'
import { LaunchProfileQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: LaunchProfileQuery
}
const LaunchDetails: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <h2>Launch unavailable</h2>
    }
    return (
        <div className='launchDetails'>
            <div className='launchDetailsStatus'>
                <span>Flight No.  {data.launch.flight_number} </span>
            </div>
            <h1>
                {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
            </h1>
            <p>Launched from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
            <p>{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div className='LaunchProfile__image-list' >
                    {data.launch.links.flickr_images.map
                        (
                            image => image ? <img className='LaunchProfile__image' src={image} /> : null
                        )
                    }
                </div>
            )}
        </div>
    )
};

export default LaunchDetails;
