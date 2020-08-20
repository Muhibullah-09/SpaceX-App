import React from 'react'
import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: LaunchListQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
    return (
        <div className='Launches'>
            <h3>All Spacex Launches</h3>
            <ol className='Launches-list'>
                {!!data.launches && data.launches.map(
                    (launch, i) => !!launch && (
                        <li key={i} className='Launches-item' >
                            Flight No. -  {launch.flight_number}<br />
                            <br />
                            Mission Name - {launch.mission_name}<br />
                            <br />
                            Launch Year - { launch.launch_year}<br />
                            <br />
                            Launch Success - {JSON.stringify(launch.launch_success)}
                        </li>
                    )
                )}
            </ol>
        </div>
    )
}

export default Launch