import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { RefObject } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FeaturedProduct } from "./featured_product";
import { useRef } from "react";

interface FeaturedProductModel {
    image: string;
    label: string;
    description: string;
    price: number;
}

interface FeaturedProductState {
    leftArrowColor: string;
    rightArrowColor: string;
    index: number;
}


interface FeaturedProductProps {
    products: FeaturedProductModel[];
}

export class FeaturedProducts extends React.Component<
    FeaturedProductProps,
    FeaturedProductState
> {
    listRef: React.RefObject<HTMLDivElement>;

    constructor(props: FeaturedProductProps) {
        super(props);
        this.state = {
            leftArrowColor: "grey",
            rightArrowColor: "black",
            index: 0,
        };

        this.listRef = React.createRef();
    }

    componentDidMount() {
       
        this.listRef.current?.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        this.listRef.current?.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {

        console.log(this.state.index);

        this.setState({
            leftArrowColor: this.state.index > 0 ? "black" : "grey",
            rightArrowColor:
                (this.props.products.length > 3 && (this.state.index + 3) < this.props.products.length)
                    ? "black"
                    : "grey",
        });
    };

    render() {
        const { products } = this.props;

        return (
            <div className="featured_products">
                <div className="featured_products_decoration"></div>
                <p style={{ fontWeight: "400", fontSize: "30px", marginTop: "50px" }}>
                    Featured Products
                </p>
                <div className="featured_products_list" ref={this.listRef}>
                    {products.map((item, index) => (
                        <FeaturedProduct
                            key={index}
                            image={item.image}
                            label={item.label}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>

                <div className="featured_products_arrows_container">
                    <FontAwesomeIcon
                        onClick={() => {

                            if (this.props.products.length > 3 && this.state.index > 0) {

                                this.listRef.current!.scrollBy(-334, 0);
                                this.setState((prevState) => ({
                                    rightArrowColor: prevState.rightArrowColor,
                                    index: prevState.index - 1,
                                }))
                            }
                        }}
                        style={{ height: "25px", color: this.state.leftArrowColor }}
                        icon={icons.faArrowLeft}
                    ></FontAwesomeIcon>

                    <div style={{ width: "50px" }}></div>
                    <FontAwesomeIcon
                        onClick={() => {

                            if (this.props.products.length > 3 && (this.state.index + 3) < this.props.products.length) {
                                this.listRef.current!.scrollBy(334, 0);
                                this.setState((prevState) => ({
                                    leftArrowColor: prevState.leftArrowColor,
                                    index: prevState.index + 1,
                                }))
                            }
                        }}
                        style={{ height: "25px", color: this.state.rightArrowColor }}
                        icon={icons.faArrowRight}
                    ></FontAwesomeIcon>
                </div>
            </div>
        );
    }
}
