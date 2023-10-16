import { ProductCard } from "../product_card";
import { SortButton } from "../sort_button";

export function RightColumn() {
  return (
    <div className="right_column">
      <div className="header">
        <p style={{ width: "100px", fontWeight: "450", fontSize: "18px" }}>
          Shop All
        </p>
        <div className="sort_container">
          <SortButton
            label={"LATEST"}
            width={100}
            height={40}
            menuData={["Man", "Woman", "Children"]}
          />
          <SortButton
            label={"REFERENCE"}
            width={100}
            height={40}
            menuData={[
              "Relevance",
              "Name, A To Z",
              "Name, Z to A",
              "Price, low to high",
              "Price, high to low",
            ]}
          />
        </div>
      </div>
      <div className="list">
        <ProductCard
          width={250}
          height={350}
          image={"/images/cloth_1.jpg"}
          label={"Tank top"}
          price={50}
          description={"Finding perfect product"}
        />{" "}
        <ProductCard
          width={250}
          height={350}
          image={"/images/cloth_1.jpg"}
          label={"Tank top"}
          price={50}
          description={"Finding perfect product"}
        />{" "}
        <ProductCard
          width={250}
          height={350}
          image={"/images/cloth_1.jpg"}
          label={"Tank top"}
          price={50}
          description={"Finding perfect product"}
        />{" "}
        <ProductCard
          width={250}
          height={350}
          image={"/images/cloth_1.jpg"}
          label={"Tank top"}
          price={50}
          description={"Finding perfect product"}
        />{" "}
        <ProductCard
          width={250}
          height={350}
          image={"/images/cloth_1.jpg"}
          label={"Tank top"}
          price={50}
          description={"Finding perfect product"}
        />{" "}
        <ProductCard
          width={250}
          height={350}
          image={"/images/cloth_1.jpg"}
          label={"Tank top"}
          price={50}
          description={"Finding perfect product"}
        />{" "}
      </div>
    </div>
  );
}
