
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from '@fortawesome/free-solid-svg-icons';

interface BenefitProps {
    title: string;
    description: string;

}
interface BenefitState {

}
export class Benefit extends React.Component<BenefitProps, BenefitState>{


    constructor(props: BenefitProps) {
        super(props)

    }
    render() {

        const { title, description } = this.props;

        return <div className="benefit_container">
            <div className="benefit_container_icon"> 
            
            <FontAwesomeIcon icon={icons.faShippingFast} style={{height:"40px",width:"40px"}} />
            </div>
            <div className="benefit_container_desc">

                <p style={{ fontWeight: "bold", fontSize: "20px", }}> {title}</p>
                <p style={{ fontSize: "10px", color: "grey", marginTop: "20px" }}>{description} </p>

            </div>

        </div >

    }
}