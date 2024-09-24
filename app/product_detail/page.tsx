"use client";
import Head from "next/head";
import Item from "../comps/product/item";
import Similar from "../comps/product/similar";
const ProductDetails = ()=>{
    return (
        <>
        <Head>
          <title>Product details</title>     
        </Head>
        
        <Item />
        <div className="bg-white p-7">
            <Similar />
        </div>
        
        </>
    );
}
export default ProductDetails;