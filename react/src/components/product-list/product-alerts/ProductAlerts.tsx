import {Product} from "../../../model/Product";
import {Button} from "primereact/button";

export const ProductAlerts = ({notify, product}: { notify: (event: any) => void, product: Product }) => {
    return (
        <>
            {product && product.price > 700 &&
                <p>
                    <Button type="button" onClick={notify}>Notify Me</Button>
                </p>}
        </>
    )
}
