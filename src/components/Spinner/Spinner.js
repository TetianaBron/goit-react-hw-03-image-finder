import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => (
     <div className={s.Loader}>
        <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={80}
            width={80}
            timeout={3000}
        />
     </div>
);

export default Spinner;