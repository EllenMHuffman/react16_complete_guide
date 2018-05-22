import React from 'react';

const userOutput = (props) => {
    return (
        <div className={'UserOutput'}>
            <p>This is { props.username } in the userOutput component.</p>
            <p>This is paragraph Two of the userOutput component.</p>
        </div>
    );
};

export default userOutput;
