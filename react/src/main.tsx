import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'primereact/resources/themes/lara-dark-teal/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProductList} from "./components/product-list/ProductList";
import {ProductDetails} from "./components/product-list/product-details/ProductDetails";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<ProductList/>}/>
                    <Route path="products/:productId" element={<ProductDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
