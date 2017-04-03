import React from 'react';
import CamperListItem from './camper_list_item';

const CamperList = (props) => {
    console.log(props.campers);

    const Items = props.campers.map((camper, index) => {
        return <CamperListItem key={index} camper={camper} number={index + 1}/>
    });

    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>UserName</th>
                    <th>Last 30 Days</th>
                    <th>All Time Points</th>
                </tr>
            </thead>
            <tbody>
                {Items}
            </tbody>
        </table>
    );
}

export default CamperList;