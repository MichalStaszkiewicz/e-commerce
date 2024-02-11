import { Benefit } from "./component";
import "@/styles/globals.scss";
import "@/components/collection/style.scss";
export default function BenefitSection() {
  return (
    <div className="shopping_benefits">
      <Benefit
        title={"FREE SHIPPING"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
        }
        index={1}
      />

      <Benefit
        title={"FREE RETURNS"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
        }
        index={2}
      />
      <Benefit
        title={"CUSTOMER SUPPORT"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
        }
        index={3}
      />
    </div>
  );
}
