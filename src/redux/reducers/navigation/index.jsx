const initialState = {
  isOpen: [], //for active default menu
  isTrigger: [], //for active default menu, set blank for horizontal
  navUpdate: ''
};


const Navigation = (state = initialState, action) => {
  let trigger = [];
  let open = [];
  switch (action.type) {
    case "COLLAPSE_TOGGLE":
      if (action.menu === 'sub') {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.id);
        if (triggerIndex > -1) {
          open = open.filter(item => item !== action.id);
          trigger = trigger.filter(item => item !== action.id);
        }

        if (triggerIndex === -1) {
          open = [...open, action.id];
          trigger = [...trigger, action.id];
        }
      } else {
        open = state.isOpen;
        const triggerIndex = (state.isTrigger).indexOf(action.id);
        trigger = (triggerIndex === -1) ? [action.id] : [];
        open = (triggerIndex === -1) ? [action.id] : [];
      }

      return {
        ...state,
        isOpen: open,
        isTrigger: trigger
      };
    case "NAV_CONTENT_LEAVE":
      return {
        ...state,
        isOpen: open,
        isTrigger: trigger,
      };
    case "NAV_COLLAPSE_LEAVE":
      if (action.menu === 'sub') {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.id);
        if (triggerIndex > -1) {
          open = open.filter(item => item !== action.id);
          trigger = trigger.filter(item => item !== action.id);
        }
        return {
          ...state,
          isOpen: open,
          isTrigger: trigger,
        };
      }
      return { ...state };

    case "NAV_UPDATE":
      return {
        ...state,
        navUpdate: action.text
      }
    default: return state;
  }
}

export default Navigation



