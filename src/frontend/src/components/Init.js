import React from 'react';
import copyright from '../assets/copyright.png';
import czech from '../assets/czech.png';
import logo from '../assets/logo.png';
import verticalDivider from '../assets/verticalDivider.png';

const Init = () => (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>NodeJS & ReactJS Template</h1>
        <img alt="" src={ logo } height="350" width="350" style={{ margin: '50px' }} />
        <span >
        <img alt="" src={ czech } height="12" />
        <img alt="" src={ verticalDivider } height="12" style={{ margin: '0 10px 0 10px' }} />
        <img alt="" src={ copyright } height="12" />
        &nbsp; 2020 Tomáš Pásler
        </span>
    </div>
);

export default Init;
