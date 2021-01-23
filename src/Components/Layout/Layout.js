import React from 'react';
import s from './Layout.module.css';

const Layout = ({ children }) =>
    <div className={s.layout}>{children}</div>;

export default Layout;