import React, { useContext } from "react";
import { styled } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import MenuItem from "./MenuItem/MenuItem";
import MenuContext from "../../../../store/menu-context";

export const MENU_WIDTH = 232;
export const MENU_WIDTH_COLLAPSED = 55;

const Menu = () => {
  const menuCtx = useContext(MenuContext);

  const iconsOnly = menuCtx.isMenuCollapsed;

  const MenuContainer = styled("div")(() => ({
    width: iconsOnly ? MENU_WIDTH_COLLAPSED : MENU_WIDTH,
  }));

  const menu = (
    <>
      <MenuItem
        linkTo="/"
        text="Home"
        iconsOnly={iconsOnly}
        icon={<HomeIcon />}
      />
      <MenuItem
        linkTo="/transfer-status"
        text="Transfer Status"
        iconsOnly={iconsOnly}
        icon={<ThumbsUpDownIcon />}
      />
    </>
  );

  return <MenuContainer>{menu}</MenuContainer>;
};

export default Menu;
