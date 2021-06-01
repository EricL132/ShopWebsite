import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCart } from '../../redux/actions/index'
import {showCartInfo} from '../../redux/actions/index'
import RightCartInfo from '../RightCartInfo/RightCartInfo'
import addToCart from '../utils/addToCart'
import './Homepage.css'



export default function HomePage(props) {
    const [products, setProducts] = useState()
    const dispatch = useDispatch()
/*     function getProducts() {
        fetch('/api/products').then((res) => res.json()).then((data) => {
            setProducts(data.products)
        })
    }

    function AddItem(e){
        addToCart(e,products,dispatch);
    }


    useEffect(() => {
        getProducts()
    }, []) */
    return (
        <div id="all-product-container">
            {/* {products ?
                products.map((product, i) => {
                    return <div key={i} className="home-product-container">
                        <img className="product-image" src={product.image}></img>
                        <div className="product-info-container">
                            <div className="product-info-add-container">
                                <h1 className="product-name">{product.name}</h1>
                                <button item={i} className="nav-buttons product-cart" onClick={AddItem}>Cart</button>
                            </div>

                            <span className="product-price">${product.price}</span>

                        </div>
                    </div>
                })

                : null} */}
            
                <RightCartInfo updateCartInfo={props.updateCartInfo}></RightCartInfo>
                

        </div>
    )
}

