"use client";
import Item from "../comps/product/item";
import Similar from "../comps/product/similar";
const ProductDetails = ()=>{
    return (
        <>
        <title>Product details</title>
        <Item />
        <div className="bg-white p-7">
            <Similar />
        </div>
        
        </>
    );
}
export default ProductDetails;