import React, { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

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
                     <div className={s.Loader}>
                         <Loader
                            type="ThreeDots"
                            color="#3f51b5"
                            height={80}
                            width={80}
                            timeout={3000}
                         />
                      </div>)}
                        
                    <img
                        onLoad={this.onLoad}
                        src={src}
                        alt={alt} />
                </div>
                </div>
            </>,
            modalRoot);
    }
}
