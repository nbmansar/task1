import React from 'react';

function Headers(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
                        <div className="collase navbar-collapse" id="navbarTogglerDemo01" style={{ display: 'flex', justifyContent: 'center' }}>
            <ul className='navbar-nav' >
                <li className='nav-link active text-white'>Ansar</li>
                <li className='nav-link text-white'>Test</li>
                <li className='nav-link text-white'>worst</li>
                <li className='border m-1 nav-link p-1 text-white  '>Profile</li>
            </ul>
            </div>
</nav>
    );
}

export default Headers;