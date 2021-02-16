import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default class App extends Component {

    state = {
        query: '',
    };

    handleFormSubmit = query => {
        this.setState({ query });
    };

    render() {
        
        return ( 
            <Layout>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery query={this.state.query} />
                <ToastContainer/>
            </Layout>
        );
    }
}