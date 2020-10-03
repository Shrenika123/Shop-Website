import React, { useState } from 'react'
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import CartTotal from '../CartTotal/CartTotal'
import { useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal';
import { count } from '../../Redux/counter'

function getModalStyle() {
    const top = 42;
    const left = 80;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,

    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 450,
        overflow: 'scroll',

        backgroundColor: theme.palette.background.paper,
        border: 'none',
        boxShadow: theme.shadows[5],
        marginLeft: '-10px',
        height: '300px',
        margin: 'none',
        paddingLeft: '-10px',
        outline: '0'

    },
}));


const Header = () => {
    const classes = useStyles()

    const count1 = useSelector(count)
    const [status, setStatus] = useState(false)
    const [modalStyle] = useState(getModalStyle);



    return (


        <div className="Header-main">
            <Modal
                open={status}
                onClose={() => setStatus(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>

                    <CartTotal />
                </div>

            </Modal>
            <h2 className="Header-title">
                Shop
            </h2>

            <div className="Header-right">
                <div>
                    <p className="cartCount">{count1}</p>
                    <button onClick={() => setStatus(!status)} className="Header-button">
                        cart
                    </button>
                </div>
                <button className="Header-Avatar"></button>
                <h4 className="Header-username">
                    UseName
                 </h4>
            </div>
        </div>
    )
}

export default Header