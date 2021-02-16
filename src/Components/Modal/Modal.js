import React, { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import Spinner from '../Spinner/Spinner';
import Img from '../../images/No_Image-512.webp';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    static propTypes = {
        image: PropTypes.object,
        onClose: PropTypes.func,
    };

    state = {   
        isLoading: true,
    }; 

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
    if (e.code === 'Escape') {
        this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    onLoad = () => {
        this.setState({ isLoading: false });
    }

    render() {
        const { src, alt } = this.props.image;
        const { isLoading } = this.state;
        
        return createPortal(
            <>
            <div className={s.Overlay} onClick={this.handleBackdropClick}>
                <div className={s.Modal}>
                         
                        {isLoading && (
                            <div className={s.SpinnerCentered}>
                                <Spinner />
                            </div>)}
                        
                    <img
                        onLoad={this.onLoad}
                        src={src ? src : Img}
                        alt={alt} />
                </div>
            </div>
            </>,
            modalRoot);
    }
}
