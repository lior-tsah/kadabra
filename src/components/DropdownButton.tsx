import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

 interface Option {
  name: string;
  onPress: () => void;
}
export interface FilterButton {
  name: string;
  src: any;
  options: Option[];
}

interface DropdownButtonProps {
  btn: FilterButton;
  mainClassName?: string;
  titleClassName?: string;
  containerClassName?: string;
}

const DropdownButton = (props: DropdownButtonProps) => {
  const {
    btn,

    containerClassName = "",
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    // event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: any) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  const handlePressItem = (option: Option, e: any) => {
    option.onPress();
    handleClose(e);
  };

  return (
    <div key={btn.name} className={containerClassName}>
      <img
        className="input-svg pointer"
        src={btn.src}
        alt="icon"
        onClick={handleClick}
      />
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {btn.options.map((option) => (
          <MenuItem
            key={option.name}
            onClick={(e) => handlePressItem(option, e)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownButton;
