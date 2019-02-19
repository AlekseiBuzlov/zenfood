import { createReducerTree } from 'create-reducer-tree';
import * as AppReducer from '@reducers/App.reducer';

const reducerComposer: any = {
    app: {
        root: {
            initialState: AppReducer.initialState,
            actions: AppReducer.actionTypes,
            reducer: AppReducer.reducer
        }
    }
}

export const store = createReducerTree(reducerComposer);