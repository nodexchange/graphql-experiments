import React, { Component } from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";

const LAUNCHES_query = gql
`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launches_success
    }
  }
`

export class Launches extends Component {
  render() {
    return (
      <h1 className="display-4 my-3"></h1>
    )
  }
}

export default Launches
