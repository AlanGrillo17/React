import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartFlatbed}  from '@fortawesome/free-solid-svg-icons';
const CartWidgetComponent = () => {
    const iconStyle ={
        fontSize: '1.3rem',
        paddingRight: '10px'
    }
    return (
        <div>
           <FontAwesomeIcon icon={faCartFlatbed} />
           <span style={{fontSize: '1.3rem'}}>10</span>
        </div>
    )
}

export default CartWidgetComponent;