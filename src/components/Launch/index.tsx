import React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import Launch from './Launch';


const LaunchContainer = () => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error || !data) {
        return <h1>Error found.?.?.</h1>
    }

    return <Launch data={data} />
};

export default LaunchContainer