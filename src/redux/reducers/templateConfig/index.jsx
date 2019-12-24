import options from './configOptions'

const Configur = (state = options, action) => {
  switch (action.type) {
    case "LAYOUT": return {
      ...state,
      layout: action.layout,
    };
    case "LAYOUT_TYPE": return {
      ...state,
      layoutType: action.layout,
    };
    case "COLLAPSE_MENU": return {
      ...state,
      collapseMenu: !state.collapseMenu,
    };
    case "ON_ITEM_CLICK": return {
      ...state,
      resMenu: false,
    };
    case "COLLAPSE_MENU_RES": return {
      ...state,
      resMenu: !state.resMenu,
    };
    case "COLOR_ICON": return {
      ...state,
      iconColor: !state.iconColor,
    };
    case "MENU_FIXED": return {
      ...state,
      menuFixed: !state.menuFixed,
    };
    case "HEADER_FIXED": return {
      ...state,
      headerFixed: !state.headerFixed,
    };
    case "BOX_LAYOUT": return {
      ...state,
      boxLayout: !state.boxLayout,
    };
    case "RTL": return {
      ...state,
      rtl: !state.rtl,
    };
    case "MENU_DROPDOWN_ICON": return {
      ...state,
      menuDropdownIcon: action.layout,
    };
    case "MENU_LIST_STYLE": return {
      ...state,
      menuListIcon: action.layout,
    };
    case "MENU_ACTIVE_COLOR": return {
      ...state,
      menuActiveColor: action.layout,
    };
    case "MENU_TITLE_COLOR": return {
      ...state,
      menuTitleColor: action.layout,
    };
    case "HIDE_CAPTION": return {
      ...state,
      hideCaption: !state.hideCaption,
    };
    case "HEADER_BREADCRUMB_HIDE": return {
      ...state,
      headerBreadcrumbHide: !state.headerBreadcrumbHide,
    };
    case "HEADER_BAGRAOUND": return {
      ...state,
      headerBg: action.layout,
    };
    case "PREBUILD_LAYOUT": return {
      ...state,
      prebuildLayout: action.layout,
    };
    case "BRAND_BAGROUND": return {
      ...state,
      brandBg: action.layout,
    };
    case "MENU_BAGROUND": return {
      ...state,
      menuBg: action.layout,
      menuBgImage: "",
      menuBgPattern: "",
      menuBgGradient: ""
    };
    case "MENU_BAGROUND_GRADIENT": return {
      ...state,
      menuBgGradient: action.layout,
      menuBgImage: "",
      menuBgPattern: "",
      menuBg: ""
    };
    case "MENU_BAGROUND_PATTERN": return {
      ...state,
      menuBgPattern: action.layout,
      menuBgImage: "",
      menuBgGradient: "",
      menuBg: ""
    };
    case "CONFIG_BLOCK": return {
      ...state,
      configBlock: !state.configBlock,
    };
    case "MENU_BAGROUND_IMAGE": return {
      ...state,
      menuBgImage: action.layout,
      menuBgPattern: "",
      menuBgGradient: "",
      menuBg: ""
    };
    case "RESET": return state = options
    default: return state;
  }
}

export default Configur



