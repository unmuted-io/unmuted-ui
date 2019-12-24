export const layOut = layout => dispatch =>
  dispatch({
    type: "LAYOUT",
    layout
  });

export const layOutType = layout => dispatch =>
  dispatch({
    type: "LAYOUT_TYPE",
    layout
  });

export const collapseMenuRes = () => dispatch =>
  dispatch({
    type: "COLLAPSE_MENU_RES"
  });

export const collapseMenu = () => dispatch =>
  dispatch({
    type: "COLLAPSE_MENU"
  });

export const onItemClick = () => dispatch =>
  dispatch({
    type: "ON_ITEM_CLICK"
  });

export const colorIcon = () => dispatch =>
  dispatch({
    type: "COLOR_ICON"
  });

export const fixedMEnu = () => dispatch =>
  dispatch({
    type: "MENU_FIXED"
  });

export const fixedHeader = () => dispatch =>
  dispatch({
    type: "HEADER_FIXED"
  });

export const layoutBox = () => dispatch =>
  dispatch({
    type: "BOX_LAYOUT"
  });

export const layoutRtl = () => dispatch =>
  dispatch({
    type: "RTL"
  });

export const menuDropDownIcon = layout => dispatch =>
  dispatch({
    type: "MENU_DROPDOWN_ICON",
    layout
  });

export const menuListStyle = layout => dispatch =>
  dispatch({
    type: "MENU_LIST_STYLE",
    layout
  });

export const menuActiveColor = layout => dispatch =>
  dispatch({
    type: "MENU_ACTIVE_COLOR",
    layout
  });

export const menuTitleColor = layout => dispatch =>
  dispatch({
    type: "MENU_TITLE_COLOR",
    layout
  });

export const hideCaption = () => dispatch =>
  dispatch({
    type: "HIDE_CAPTION"
  });

export const hideBreadcrumb = () => dispatch =>
  dispatch({
    type: "HEADER_BREADCRUMB_HIDE"
  });

export const headerBg = layout => dispatch =>
  dispatch({
    type: "HEADER_BAGRAOUND",
    layout
  });

export const bgBrand = layout => dispatch =>
  dispatch({
    type: "BRAND_BAGROUND",
    layout
  });

export const bgGradient = layout => dispatch =>
  dispatch({
    type: "MENU_BAGROUND_GRADIENT",
    layout
  });

export const bgPattern = layout => dispatch =>
  dispatch({
    type: "MENU_BAGROUND_PATTERN",
    layout
  });

export const bgImage = layout => dispatch =>
  dispatch({
    type: "MENU_BAGROUND_IMAGE",
    layout
  });

export const bgMenu = layout => dispatch =>
  dispatch({
    type: "MENU_BAGROUND",
    layout
  });

export const layoutPrebuild = layout => dispatch =>
  dispatch({
    type: "PREBUILD_LAYOUT",
    layout
  });

export const resetTemplate = () => dispatch =>
  dispatch({
    type: "RESET",
  });

export const configBlock = () => dispatch =>
  dispatch({
    type: "CONFIG_BLOCK"
  });