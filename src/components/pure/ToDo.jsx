import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({ onClick, completed, text, id }) => {
    return (
        <li onClick={ onClick } 
        style={
            {
                textDecoration: completed ? 'line-through' : 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white'
            }
        }>
            {id} - {text}
        </li>
    );
}

ToDo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default ToDo;
