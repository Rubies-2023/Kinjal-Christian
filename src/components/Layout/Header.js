import { Fragment } from "react";
import mealsImg from '../../assets/meals.jpg'
import '../Layout/Header-module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className="header">
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className="main-image">
            <img src={mealsImg} alt='Delicious Meals are here'/>
        </div>
    </Fragment>
};

export default Header;