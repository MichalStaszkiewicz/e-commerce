
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as icons from '@fortawesome/free-solid-svg-icons';

interface CollectionProps {
    label: string
    image: string
}
interface CollectionState {


}
export class Collection extends React.Component<CollectionProps, CollectionState>{

    constructor(props: CollectionProps) {


        super(props);
    }
    render() {
        const { label, image } = this.props
        return <div className="collection_item">
            <div className="collection_background" style={{ backgroundImage: `url(${image})` }}></div>

            <p style={{ fontSize: "12px", marginLeft: "10px", color: "white", zIndex: 3 }}> COLLECTIONS </p>
            <p style={{ fontSize: "25px", marginLeft: "10px", marginBottom: "10px", color: "white", zIndex: 3 }}>{label}</p>


        </div>
    }
} 