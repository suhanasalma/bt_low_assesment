import React from 'react';

const Title = ({title,details}) => {
    return (
        <div>
        <h1>{title}</h1>
        <p>{details}</p>
        </div>
    );
};

export default Title;