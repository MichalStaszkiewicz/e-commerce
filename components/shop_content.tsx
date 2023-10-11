import { DragEventHandler, useCallback, useRef, useState } from "react";


export default function ShopContent() {

    return (
        <div className="shop_content">

            <div className="container">
                <div className="left_column">

                    <div className="categories">
                        <p className="categories_header" style={{ marginTop: '20px' }}>CATEGORIES</p>
                        <ul className="list">
                            <li className="list_element"> <div>Men</div> <p style={{ color: "black", }}>(2,220)</p></li>
                            <li className="list_element"> <div>Woman</div> <p style={{ color: "black" }} >(2,550)</p></li>
                            <li className="list_element"> <div>Children</div><p style={{ color: "black" }} >(2,124)</p>
                            </li>
                        </ul>

                    </div>

                    <div className="filters">

                        <div className="container">
                            <p className="categories_header">FILTER BY PRICE</p>
                            <div className="slider_container">

                            </div>
                            <p style={{ marginTop: '10px' ,fontSize:"14px"}}>$76 - $262</p>
                            <p className="categories_header" style={{ marginTop: "20px" }}>SIZE</p>
                            <div style={{ marginTop: "10px" }}></div>
                            <ul className="size_list">
                                <CategoriesSize label="Small (2,319)" />
                                <CategoriesSize label="Medium (1,282)" />
                                <CategoriesSize label="Large (1,392)" />

                            </ul>
                            <p className="categories_header" style={{ marginTop: "20px" }}>COLOR</p>
                            <div style={{ marginTop: "10px" }} ></div>
                            <div className="color_list" >
                                <CategoriesColorIndicator color={'red'} label={'Red'} />
                                <CategoriesColorIndicator color={'green'} label={'Green'} />
                                <CategoriesColorIndicator color={'aqua'} label={'Blue'} />
                                <CategoriesColorIndicator color={'purple'} label={'Purple'} />
                            </div>

                        </div>

                    </div>
                </div>
                <div className="right_column"></div>

            </div>
        </div >)



}


function CategoriesColorIndicator({ color, label }: { color: string, label: string }): JSX.Element {
    return (<div className="color_container" >
        <div className="color_indicator" style={{ backgroundColor: color, }}></div>
        <div style={{ marginLeft: "10px" }}></div>
        <p style={{ fontWeight: "350", fontSize: "15px" }}>{label} (2,429)</p>


    </div>);
}
function CategoriesSize({ label }: { label: string }) {
    return (<li><div>
        <input type="checkbox" id="scales" name="scales" checked />
        <label  style={{fontWeight: "350", fontSize: "15px"}}> {label}</label>
    </div></li>)
}