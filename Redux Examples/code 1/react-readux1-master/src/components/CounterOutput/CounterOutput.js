import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter is here: {props.value}
    </div>
);

export default counterOutput;