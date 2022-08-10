import styles from './ProductList.module.css';
import {confirmPopup, ConfirmPopup} from "primereact/confirmpopup";
import {useCallback, useEffect} from "react";
import {Card} from "primereact/card";
import {observer} from "mobx-react-lite";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import {ProductAlerts} from "./product-alerts/ProductAlerts";
import ProductListStore from "./ProductListStore";

export const ProductList = observer(() => {
    const store = ProductListStore;

    const sharePopupFunc = useCallback((event: any) => {
        confirmPopup({
            target: event.currentTarget!,
            message: 'The product has been shared successfully',
            rejectClassName: 'productListRejectClass'
        })
    }, [])
    const notifyPopupFunc = useCallback((event: any) => {
        confirmPopup({
            target: event.currentTarget!,
            message: 'You will be notified when the product goes on sale',
            rejectClassName: 'productListRejectClass'
        })
    }, [])

    useEffect(() => {
        store.fetchProducts()
    }, [])

    return (
        <div className="product-list-content">
            <h2>Products</h2>

            <ConfirmPopup/>

            {store.products.map(product => {
                return (
                    <Card
                        className={styles.card}
                        key={product.id}
                        header={
                            <h3 className={styles.header}>
                                <Link to={'/products/' + product.id}>{product.name}</Link>
                            </h3>}
                        footer={
                            <div className={styles.footer}>
                                <Button label="Share" type="button" onClick={sharePopupFunc} className={styles.shareButton}/>
                                <ProductAlerts notify={notifyPopupFunc} product={product}/>
                            </div>}
                    >
                        {product.description && <p>Description: {product.description}</p>}
                    </Card>
                )
            })}
        </div>
    )
})
