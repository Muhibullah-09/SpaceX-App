import React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';
interface Props {
    id: number;
}

const LaunchDetailsContainer = ({ id }: Props) => {
    const { data, error, loading } = useLaunchProfileQuery({ variables: { id: String(id) } });
    if (loading) {
        return <h1>Data is Loading...</h1>
    }
    if (error) {
        return <h1>Error 404 .!.!</h1>
    }
    if (!data) {
        return <h1>Please select a mission for it's details</h1>
    }

    return <LaunchDetails data={data} />
}

export default LaunchDetailsContainer;