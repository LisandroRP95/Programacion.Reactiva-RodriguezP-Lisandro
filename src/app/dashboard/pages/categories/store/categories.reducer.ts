import { createFeature, createReducer, on } from '@ngrx/store';
import { CategoriesActions } from './categories.actions';
import { Category } from '../models';
import { CATEGORIES_MOCK } from '../mock';


export const categoriesFeatureKey = 'categories';

export interface State {
  categories: Category[],
  categoryDetail: Category | null,
}

export const initialState: State = {
  categories: CATEGORIES_MOCK,
  categoryDetail: null,
};

export const reducer = createReducer(
  initialState,

  // loadCategories
  on(CategoriesActions.loadCategories, state => {
    return {
      ...state,
      categories: [],
    }
  }),

  on(CategoriesActions.loadCategoryDetail, (state, action) => {
    return {
      ...state,
      categoryDetail: CATEGORIES_MOCK.find((c) => c.id == action.categoryId) || null,
    }
  })

);

export const categoriesFeature = createFeature({
  name: categoriesFeatureKey,
  reducer,
}); 