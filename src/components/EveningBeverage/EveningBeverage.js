import React from 'react';
import Aux from '../../hoc/Wrap/Wrap'
import Modal from '../UI/Modal/Modal'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './EveningBeverage.module.css';
import EveningBeverage from '../../assets/images/evening-beverage.jpg'
import Button from '../UI/Button/Button'

const eveningBeverage=(props)=>{
    return(
        <Aux>
            <Backdrop show={props.show} hide={props.hide}/>
            <Modal show={props.show} hide={props.hide}>
                <div className={classes.EveningBeverage}>
                    <h3>Evening Beverage</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,</p>
                        <div className={classes.Icon}>
                            <img src={EveningBeverage} alt="Evening Beverage"/>   
                        </div>
                        <select>
                            <option disabled selected>Select</option>
                            <option>Tea</option>
                            <option>Coffee</option>
                        </select>
                        <div style={{width:'80%', margin:'auto'}}>
                            <Button class="btn-primary">Set Preference</Button>
                        </div>
                </div>
            </Modal>
        </Aux>
    )
}

export default eveningBeverage;