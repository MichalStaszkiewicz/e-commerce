class Product {
  name!: string;
  description!: string;
  image!: string;
  price!: number;
  constructor(name: string, description: string, image: string, price: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
