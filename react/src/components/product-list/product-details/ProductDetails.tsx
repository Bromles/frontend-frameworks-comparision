import styles from './ProductDetails.module.css'
import {Link, useParams} from "react-router-dom";
import ProductListStore from "../ProductListStore";
import {Card} from "primereact/card";
import {useEffect} from "react";

export const ProductDetails = () => {
    const productId: number = Number(useParams().productId);
    const store = ProductListStore;

    useEffect(() => {
        if(store.products.length === 0) {
            store.fetchProducts();
        }
    }, [])

    const product = store.products.find(p => p.id === productId);

    return (
        <div className="details-content">
            <h2>Product Details</h2>
            {product &&
                <Card
                    header={<h3 className={styles.title}>{product.name}</h3>}
                    footer={<h3><Link to="/">Home</Link></h3>}
                >
                    <h4>{'$' + product.price.toFixed(2)}</h4>
                    <p>{product.description}</p>
                </Card>}
        </div>
    )
}
