import { Collection } from "./component";
import "@/styles/globals.scss";
import "@/components/collection/style.scss";
import useMediaQuery from "@/hooks/use-media-query";
import { breakpoints } from "@/utils/breakpoints";
export default function CollectionSection() {
    const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
    const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
    const isMobile = useMediaQuery(`(min-width: ${breakpoints.xs})`);

  function RenderView() {
    if (isDesktop) {
      return ViewDesktop();
    } else if (isTablet) {
      return ViewTablet();
    } else {
      return ViewMobile();
    }
  }
  function ViewDesktop() {
    return (
      <div className="collections">
        <Collection label={"Women"} image={"/images/women.jpg"} index={1} />
        <Collection
          label={"Children"}
          image={"/images/children.jpg"}
          index={2}
        />
        <Collection label={"Men"} image={"/images/men.jpg"} index={3} />
      </div>
    );
  }
  function ViewTablet() {
    return (
      <div className="collections">
        <Collection label={"Women"} image={"/images/women.jpg"} index={1} />
        <Collection
          label={"Children"}
          image={"/images/children.jpg"}
          index={2}
        />
        <div className="row" style={{ marginTop: "50px" ,width:"655px" }}>
          <Collection label={"Men"} image={"/images/men.jpg"} index={3} />
        </div>
      </div>
    );
  }
  function ViewMobile() {
    return (
      <div className="collections">
        <Collection label={"Women"} image={"/images/women.jpg"} index={1} />
        <Collection
          label={"Children"}
          image={"/images/children.jpg"}
          index={2}
        />
        <Collection label={"Men"} image={"/images/men.jpg"} index={3} />
      </div>
    );
  }

  return <>{RenderView()}</>;
}
