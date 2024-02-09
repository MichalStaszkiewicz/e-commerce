type FeaturedProductModel = {
  image: string;
  label: string;
  description: string;
  price: number;
  width: number;
  height: number;
};

type FeaturedProductProps = {
  products: FeaturedProductModel[];
};
type FeaturedProductsState = {
  index: number;
  isScrolling: boolean;
};

type CarouselProps = {
  products: FeaturedProductModel[];
  slidesAtOnce: number;
};
