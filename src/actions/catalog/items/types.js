// @flow

import type { CatalogItemType } from 'types/catalog/item';
import type { ErrorType } from 'types/error';

export type FetchActionType = {|
    type: 'FETCH_ITEMS'
|}

export type FailureActionType = {|
    type: 'FETCH_ITEMS_FAILURE',
    payload: ErrorType
|}

export type SuccessActionType = {|
    type: 'FETCH_ITEMS_SUCCESS',
    payload: {
        items: Array<CatalogItemType>,
        metadata: {
            query: {
                category: number
            }
        }
    }
|}

export type ActionType =
    | FetchActionType
    | FailureActionType
    | SuccessActionType
