import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { RefObject } from "react";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { FeaturedProduct } from "./featured_product";
import { useRef, useState } from "react";
import { off } from "process";

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
    timer: any;

    constructor(props: FeaturedProductProps) {
        super(props);
        this.state = {
            leftArrowColor: "#cdcfd0",
            rightArrowColor: props.products.length > 3 ? "#5d636f" : "#cdcfd0",
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


        this.setState({
            leftArrowColor: this.state.index > 0 ? "#5d636f" : "#cdcfd0",
            rightArrowColor:
                this.props.products.length > 3 && this.state.index + 3 < this.props.products.length
                    ? "#5d636f"
                    : "#cdcfd0",
        });
    };

    handleArrowClick(offset: number) {
        const scrollSpeed = 334;

        this.listRef.current!.scrollBy({ left: scrollSpeed * offset });
        

        console.log('after timer ' + this.listRef.current!.scrollLeft)
        this.setState((prevState) => ({
            index: prevState.index + offset,
        }));
    }
    render() {
        const { products } = this.props;

        return (
            <div className="featured_products">
                <div className="featured_products_decoration"></div>
                <p style={{ fontWeight: "400", fontSize: "30px",transform:"TranslateY(200%)" }}>
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
                    <FontAwesomeIcon onMouseEnter={() => {
                        if (this.props.products.length > 3 && this.state.index > 0) {
                            this.setState((prevState) => ({
                                leftArrowColor: "black"
                            }));
                        }

                    }} onMouseLeave={() => {
                        if (this.props.products.length > 3 && this.state.index > 0) {
                            this.setState((prevState) => ({
                                leftArrowColor: "#5d636f"
                            }));
                        }

                    }}
                        onClick={() => {
                            if (this.props.products.length > 3 && this.state.index > 0) {
                                this.handleArrowClick(-1);
                            }
                        }}
                        style={{ height: "25px", color: this.state.leftArrowColor }}
                        icon={icons.faArrowLeft}
                    ></FontAwesomeIcon>

                    <div style={{ width: "50px" }}></div>
                    <FontAwesomeIcon onMouseEnter={() => {
                        if (this.props.products.length > 3 && this.state.index + 3 < this.props.products.length) {
                            this.setState((prevState) => ({
                                rightArrowColor: "black"
                            }));
                        }

                    }}
                        onMouseLeave={() => {
                            if (this.props.products.length > 3 && this.state.index + 3 < this.props.products.length) {
                                this.setState((prevState) => ({
                                    rightArrowColor: "#5d636f"
                                }));
                            }

                        }}
                        onClick={() => {
                            if (this.props.products.length > 3 && this.state.index + 3 < this.props.products.length) {
                                this.handleArrowClick(1);
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
