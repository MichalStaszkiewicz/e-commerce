

import product from "../public/images/children.jpg"
import { PrimaryButton } from "../primary-button"
export function BigSale() {
    return <div className="big_sale_container">
        <div className="big_sale_container_decoration" style={{transform:"TranslateY(3000%)"}}></div>
        <p style={{ fontWeight: "400", fontSize: "30px",transform:"TranslateY(70%)"}}>
            Big Sale!
        </p>
        <div className="big_sale_content" style={{ width: "100%", height: "100%"}}>
            <div className="big_sale_image" style={{ backgroundImage: 'url(../images/blog_1.jpg)' }}></div>
            <div className="big_sale_desc">

                <p style={{fontSize:32,color:"#7c74ea"}}>50% less in all items</p>
                <p style={{color:"#c4c7ce"}}>By <span style={{color:"#7c74ea",fontWeight:"500"}}>Carl Smith</span> • September 3, 2018</p>
                <p style={{textAlign:'center',width:470 ,color:"#8c92a0"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                <PrimaryButton height={40} width={130} label={"SHOP NOW"}></PrimaryButton>
            </div>
        </div>


    </div>

}