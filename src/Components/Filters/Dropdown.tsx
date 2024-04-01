import { useState } from "react";
import { motion } from "framer-motion";
import TrashIcon from "../../assets/TrashIcon";
import { DropdownMainDiv } from "./DropdownStyle";

interface DropdownProps {
  options: string[];
  selectedItems: string[];
  handleSelectChange: (item: string) => void;
  handleRemoveItem: (item: string) => void;
}

const Dropdown = ({
  options,
  selectedItems,
  handleSelectChange,
  handleRemoveItem,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMainDiv className="dropdown">
      <div className="select" onClick={toggleMenu}>
        Select Gender
      </div>
      <motion.div
        className="dropdown-menu"
        animate={{ height: !isOpen ? 0 : 100 }}
        transition={{ duration: 0.3 }}
      >
        {options.map((item) => (
          <div
            key={item}
            className="dropdown-item"
            onClick={() => handleSelectChange(item)}
          >
            {item}
          </div>
        ))}
      </motion.div>
      {selectedItems.map((s) => (
        <motion.div
          className="optionSelected"
          key={s}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h5>{s}</h5>
          <TrashIcon onClickFunction={() => handleRemoveItem(s)} item={s} />
        </motion.div>
      ))}
    </DropdownMainDiv>
  );
};

export default Dropdown;
