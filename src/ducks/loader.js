const initialValues = false;

export const Types = {
  START: 'hackathon/START',
  END: 'hackathon/END'
};

export const loaderReducer = (state = initialValues, action) => {
  switch (action.type) {
    case Types.START: return true;
    case Types.END: return false;
    default: return state;
  }
};

export const Actions = {
  loadStart: () => ({ type: Types.START }),
  loadEnd: () => ({ type: Types.END }),
};