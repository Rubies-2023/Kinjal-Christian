import '../Cart/Cart-module.css'
import Modal from '../UI/Modal';

const Cart = props => {

    const cartItems = (
        <ul className = 'cart-items'>
            {[{id: 'a1',name:'Chole Bhature',amount: 2, price: 36.99}].map(item => (
                    <li>{item.name}</li>
            ))}
        </ul>
    );
    
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>67.98</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onClose}>Close</button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;