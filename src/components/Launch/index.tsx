import React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import Launch, { OwnProps } from './Launch';


const LaunchContainer = (props: OwnProps) => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <div><h1>Loading...</h1><br /></div>
    }
    if (error || !data) {
        return <h1>Error found.?.?.</h1>
    }

    return <Launch data={data}  {...props} />
};

export default LaunchContainer