import gql from 'graphql-tag';

export const Query_Launch = gql`
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;