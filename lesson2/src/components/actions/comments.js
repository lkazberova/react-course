import AppDispatcher from '../dispatcher';
import {ADD_COMMENT} from './constants';

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type : ADD_COMMENT,
        data : {
            comment: {
                text
            },
            articleId

        }
    });
}


