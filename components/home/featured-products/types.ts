type FeaturedProductModel = {
    image: string;
    label: string;
    description: string;
    price: number;
  };
  
  type FeaturedProductProps = {
    products: FeaturedProductModel[];
  };
  type FeaturedProductsState = {
    leftArrow: string;
    rightArrow: string;
    index: number;
  };