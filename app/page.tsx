"use client";
import {useEffect,useState}from "react";
import card from "./component/card";
export default function deliverynote()
{
    const[data,setdata]=useState(null);
    useEffect(()=>
    {
        fetch("/api/route")
        .then(res=>res.json())
        .then(result=>setdata(result.message));},[]);
    if(!data)return<p>loading..</p>
    return(
        <card
        customer={data.customer}
        posting_date={data. posting_date}
        total_qty={data.total_qty}
        total={data.total}
        grandtotal={data.roundedtotal}
        billingAddress={data.billingAddress}
        shippingAddress={data,shippingAddress}/>
    );
}