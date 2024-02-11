import { Benefit } from "./component";
import "@/styles/globals.scss";
import "@/components/collection/style.scss";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";
export default function BenefitSection() {
  const isDektop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);

  function RenderView() {
    if (isDektop) {
      return ViewDesktop();
    } else if (isTablet) {
      return ViewTablet();
    } else {
      return ViewMobile();
    }
  }
  function ViewDesktop() {
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
  function ViewTablet() {
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
        <div className="row" style={{width:"640px",}}>
          <Benefit
            title={"CUSTOMER SUPPORT"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla."
            }
            index={3}
          />
        </div>
      </div>
    );
  }
  function ViewMobile() {
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

  return <>{RenderView()}</>;
}
