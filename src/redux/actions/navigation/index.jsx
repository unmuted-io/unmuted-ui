export const navCollapseLeave = (id, menu) => dispatch =>
  dispatch({
    type: "NAV_COLLAPSE_LEAVE",
    id,
    menu,
  });

export const navContentLeave = () => dispatch =>
  dispatch({
    type: "NAV_CONTENT_LEAVE"
  })


export const navCollapseToggle = (id, menu) =>
  dispatch =>
    dispatch({
      type: "COLLAPSE_TOGGLE",
      id,
      menu
    });

export const navUpdateText = (text) =>
  dispatch =>
    dispatch({
      type: "NAV_UPDATE",
      text
    });
