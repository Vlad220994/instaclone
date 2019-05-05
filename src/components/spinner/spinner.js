import React from 'react';
import './spinner.css'

const Spinner = () => {

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%'
    };

    return (
        <div style={divStyle} className="lds-css ng-scope">
            <div className="lds-rolling">
                <div></div>
            </div>
        </div>
    )
};

export default Spinner;