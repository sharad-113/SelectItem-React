const ListItems = ({ id, selectedItem, setSelectedItem, value }) => {
  return (
    <li
      key={id}
      className="list-item"
      onClick={() => {
        if (selectedItem?.find((element) => element.id === id) === undefined)
          setSelectedItem([...selectedItem, { id, value }]);
      }}
    >
      {value}
    </li>
  );
};
export default ListItems;
