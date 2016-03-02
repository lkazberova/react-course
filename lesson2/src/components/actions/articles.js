/**
 * Created by leisan on 01.03.16.
 */
import AppDispatcher from '../dispatcher';
import {DELETE_ARTICLE} from './constants';

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type : DELETE_ARTICLE,
        data : {
            id
        }
    });
}

