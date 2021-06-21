
const { BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_DETAILS_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL }= require( '../constants/bookConstants');

export const bookListReducer = (state = { loading: true, books: []}, action) => {
    switch(action.type){
        case BOOK_LIST_REQUEST:
            return {loading: true};
        case BOOK_LIST_SUCCESS:
            return {loading: false, books: action.payload };
        case BOOK_LIST_FAIL:
            return { loading: false, error: action.payload };        
            default: 
            return state;
    }
};
export const bookDetailsReducer = (
  state = { book: {}, loading: true }, 
  action
  ) => {
    switch (action.type) {
      case BOOK_DETAILS_REQUEST:
        return { loading: true };
      case BOOK_DETAILS_SUCCESS:
        return { loading: false, book: action.payload };
      case BOOK_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };