

export default function ShopContent() {





    return <div className="shop_content">

        <div className="container">
            <div className="left_column">

                <div className="categories">
                    <p className="categories_header">CATEGORIES</p>
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

                    </div>
                </div>
            </div>
            <div className="right_column"></div>

        </div>
    </div>
}