import React from 'react';

const DetailsPage = ({projectName,projectDescription,client,contractor}) => {
    return (
        <div>
            <p className="mb-10 font-semibold text-3xl text-violet-900 ">See Information</p>
            <div>
            <p>Project Name: {projectName}</p>
            <p>Project Description: {projectDescription}</p>
            <p>Client: {client}</p>
            <p>Contractor: {contractor}</p>
            {/* Display other fields */}
            {/* <p>Max X: {maxX}</p>
            <p>Min X: {minX}</p>
            <p>Max Y: {maxY}</p>
            <p>Min Y: {minY}</p>
            <p>Max Z: {maxZ}</p>
            <p>Min Z: {minZ}</p> */}
            </div>
        </div>
    );
};

export default DetailsPage;