import React, { Component, Fragment } from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";

import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql
`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export class Launches extends Component {
  render() {
    return (
      <Fragment>

      <h1 className="display-4 my-3">
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <p>Loading...</p>
              }
              if (error) {
                console.log('apollo data fetch error', error);
              }
              return <Fragment>
                {
                  data.launches.map(launch => (
                    <LaunchItem {...launch} />
                  ))
                }
              </Fragment>
            } 
          }
        </Query>
      </h1>
    </Fragment>
    )
  }
}

export default Launches
