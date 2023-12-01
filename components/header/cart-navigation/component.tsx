import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CartNavigation() {
  return (
    <div className="block-3">
      {" "}
      <div className="side-nav">
        <FontAwesomeIcon className="cart-icon" icon={icons.faShoppingCart} />
      </div>
    </div>
  );
}
