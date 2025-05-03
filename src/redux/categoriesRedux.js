// src/redux/categoriesRedux.js

// Initial state
const initialState = ['Sport', 'News', 'Movies'];

// Selector
export const getAllCategories = state => state.categories;

// Reducer (na razie prosty, bo tylko odczytujemy dane)
const categoriesReducer = (statePart = initialState, action) => {
  return statePart;
};

export default categoriesReducer;
