import React from "react";
import {Link} from "react-router-dom";

export const ButtonGoToHome = () => (
    <Link
        to='/'
        className='button is-info'>
        Home
    </Link>
);
