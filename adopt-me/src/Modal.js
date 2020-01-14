import React, { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom';

//Modal is a function which takes in children and returns
const Modal = ({children}) => {
    //useRef prevents memory leaks.  if we kept creating modals but didn't destroy (unrender) them they'd add up
    const elRef = useRef(null);
//check if elRef.current exists, if not create a div for it.  using this hook means we will always have the same div because elRef is the same
//object and is always pointing at this div
    if(!elRef.current) {
        const div = document.createElement('div');
        elRef.current = div;
    };

    useEffect(() => {
        //we grab the modal we created in index.html
        const modalRoot = document.getElementById('modal');
        //we append the div (elRef.current), and inside of that div will be all the {children}
        modalRoot.appendChild(elRef.current);

        //at the end, we remove the div (and it's children)
        return () => modalRoot.removeChild(elRef.current);
    }, []);
    //this createPortal is getting rendered to a different part of the DOM
    return createPortal(<div>{children}</div>, elRef.current)
};

export default Modal;