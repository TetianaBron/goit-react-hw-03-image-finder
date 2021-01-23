import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';


const BASE_URL = 'https://pixabay.com/api';
const KEY = '19207978-b8cc5d5178f1c84e5ac39b1c7';
    
export default class App extends Component {

    static propTypes = {
    };

    static defaultProps = {};

    state = {
        query: '',
    };



    render() {
       
        return ( 
            <Layout>
                <Searchbar />
                <ImageGallery />
                <Button/>
            </Layout>
        );
    }
}