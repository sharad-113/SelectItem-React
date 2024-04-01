import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SelectedItem = ({ id, selectedItem, setSelectedItem, value }) => {
  return (
    <button
      key={id}
      className="single-item"
      onClick={() => {
        const newArray = selectedItem.filter((element) => element.id !== id);
        setSelectedItem(newArray);
      }}
    >
      {value}
      <FontAwesomeIcon
        style={{
          fontSize: "12px",
          color: "white",
          margin: "1px",
          cursor: "pointer",
        }}
        icon={faX}
      />
    </button>
  );
};
export default SelectedItem;
