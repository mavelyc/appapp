import React, { Component } from 'react'

const ListComponent = props => (
    <tr>
        <td>{props.application.company}</td>
        <td>{props.application.position}</td>
        {/* <td>{props.application.status}</td> */}
        <td>{props.application.date.substring(0,10)}</td>
    </tr>

)

export default ListComponent