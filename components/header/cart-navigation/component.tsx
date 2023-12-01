import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function CartNavigation() {
  const router = useRouter();
  return (
    <div className="block-3">
      {" "}
      <div className="side-nav">
        <FontAwesomeIcon
          className="cart-icon"
          icon={icons.faShoppingCart}
          onClick={() => {
            router.push("/cart");
          }}
        />
      </div>
    </div>
  );
}
