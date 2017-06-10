// @flow

import type { CatalogCategoryType } from 'types/catalog/category';
import type { ErrorType } from 'types/error';

export type FetchActionType = {|
    type: 'FETCH_CATEGORIES'
|}

export type FailureActionType = {|
    type: 'FETCH_CATEGORIES_FAILURE',
    payload: ErrorType
|}

export type SuccessActionType = {|
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: {
        categories: Array<CatalogCategoryType>
    }
|}

export type ActionType =
    | FetchActionType
    | FailureActionType
    | SuccessActionType
