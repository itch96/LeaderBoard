import React from 'react';
const CamperListItem = (props) => {
    return (
        <tr>
            <td>{props.number}</td>
            <td><a href={`https://freecodecamp.com/${props.camper.username}`} target='_blank'><img src={`${props.camper.img}`}/>{props.camper.username}</a></td>
            <td>{props.camper.recent}</td>
            <td>{props.camper.alltime}</td>
        </tr>
    );
};

export default CamperListItem;