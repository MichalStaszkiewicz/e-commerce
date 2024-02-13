import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
export default function HeaderSearchBox() {
  return (
    <div className="block-1">
      <div className="search-box">
        <button className="icon-search">
          <FontAwesomeIcon icon={icons.faMagnifyingGlass} style={{}} />
        </button>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
