import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/Layout/Layout';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

    
export default class App extends Component {

    static propTypes = {
    };

    static defaultProps = {};

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