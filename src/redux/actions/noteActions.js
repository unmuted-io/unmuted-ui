export const addNote = (id, text, dateTime) => dispatch =>
  dispatch({
    type: "ADD_NOTE",
    id: ++id,
    text,
    dateTime
  });

export const removeNote = id => dispatch =>
  dispatch({
    type: "REMOVE_NOTE",
    id
  });

export const selectNote = id => dispatch =>
  dispatch({
    type: "NOTE_SELECT",
    id
  });

export const noteUpdate = (id, text) => dispatch =>
  dispatch({
    type: "NOTE_UPDATE",
    id,
    text
  });
