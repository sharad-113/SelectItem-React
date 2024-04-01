import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import ListItems from "./components/ListItems";
import SelectedItem from "./components/SelectedItem";

const App = () => {
  // elements is an array of size 12 consist of objects having property id and value

  const elements = [
    {
      id: 1,
      value: "One",
    },
    {
      id: 2,
      value: "Two",
    },
    {
      id: 3,
      value: "Three",
    },
    {
      id: 4,
      value: "Four",
    },
    {
      id: 5,
      value: "Five",
    },
    {
      id: 6,
      value: "Six",
    },
    {
      id: 7,
      value: "Seven",
    },
    {
      id: 8,
      value: "Eight",
    },
    {
      id: 9,
      value: "Nine",
    },
    {
      id: 10,
      value: "Ten",
    },
    {
      id: 11,
      value: "Eleven",
    },
    {
      id: 12,
      value: "Twelve",
    },
    {
      id: 13,
      value: "Thirteen",
    },
    {
      id: 14,
      value: "Fourteen",
    },
  ];
  // Used React hook useState to dynamically add the selected item from list whenever user selects any list element
  const [selectedItem, setSelectedItem] = useState([]);
  // Made use of useRef to toggle class open so that whenever user click on Fontawesome dropdown icon the list appears
  const reference = useRef(null);
  return (
    <section>
      <div className="input-container">
        <div className="input-item">
          {selectedItem.map((item) => {
            return (
              // SelectedItem is a component that is used to display the selected items inside the input tab
              <SelectedItem
                key={item.id}
                {...item}
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem}
              />
            );
          })}
        </div>
        <span
          onClick={() => {
            reference.current.classList.toggle("open");
          }}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>
      <div className="dropdown-menu" ref={reference}>
        <ul className="list-items">
          {elements.map((item) => (
            // ListItems is a component that consist of all the items available to select from.All the list item is displayed here
            <ListItems
              key={item.id}
              {...item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default App;

// <section>
//   <div className="dropdown" ref={reference}>
//     {/* <div className="dropdown-items">
//
//     </div> */}

//       <span
//         className="input-item"
//         onClick={() => {
//           // console.log(reference.current.classList);
//           reference.current.classList.toggle("open");
//         }}
//       >
//         <FontAwesomeIcon icon={faCaretDown} />
//       </span>
//     </div>
//
//   </div>
// </section>
