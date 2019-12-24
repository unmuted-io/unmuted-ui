import nodeData from "./noteData";

const Notes = (state = nodeData, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          dateTime: action.dateTime
        }
      ];

    case "NOTE_UPDATE":
      return state.map(note =>
        note.id === action.id ? { ...note, text: action.text } : note
      );
    case "REMOVE_NOTE":
      return state.filter(note => note.id !== action.id);

    default:
      return state;
  }
};

export default Notes;
