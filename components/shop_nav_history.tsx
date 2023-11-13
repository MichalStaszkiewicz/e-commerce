import { useRouter } from "next/router";
import Link from "next/link";
import path from "path";

export default function ShopNavHistory() {
  var router = useRouter();

  var paths: string[] = [];
  var firstSub = 0;
  paths.push("/");
  for (var i = 0; i < router.asPath.length; i++) {
    if (i > 0) {
      if (router.asPath[i] == "/" && firstSub != i) {
        paths.push(router.asPath.substring(firstSub, i - 1));
        firstSub = i;
      } else if (i == router.asPath.length - 1) {
        console.log("route pushed");
        paths.push(router.asPath.substring(firstSub, i + 1));
      }
    }
  }

  return (
    <div className="shop-nav-container">
      <div className="shop-nav-container" style={{ marginLeft: "20%" }}>
        {paths.map((item, index) => {
          if (index > 0) {
            return (
              <div className="shop-nav-container">
                {" "}
                <p
                  style={{
                    color: "black",
                    display: "flex",
                    width: "auto",
                    paddingLeft: "2px",
                    paddingRight: "2px",
                  }}
                >
                  {"   /   "}
                </p>{" "}
                <a href={item} style={{ color: "black", display: "flex" }}>
                  {item.substring(index, item.length)}
                </a>
              </div>
            );
          }
          return (
            <a
              className="nav-link"
              href={item}
              style={{
                color: item != router.basePath ? "#7c74ea" : "black",
                display: "flex",
              }}
              onMouseEnter={() => {}}
            >
              {"Home"}
            </a>
          );
        })}
      </div>
    </div>
  );
}
