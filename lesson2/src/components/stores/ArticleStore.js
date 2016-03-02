/**
 * Created by leisan on 01.03.16.
 */
import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher';
import {commentStore} from './';
import Model from './Model';
import {DELETE_ARTICLE, ADD_COMMENT} from '../actions/constants';

class ArticleStore  extends SimpleStore{
    constructor(...args) {
        super(...args);


        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data} = action;

            switch (type) {
                case DELETE_ARTICLE :
                    this.delete(data.id);
                    this.emitChange();
                    break;
                case ADD_COMMENT:
                    AppDispatcher.waitFor([commentStore.dispatchToken]);
                    const {comment, articleId} = data;
                    this.getById(articleId).comments.push(comment.id);

                    this.emitChange();

                    break;

            }
        }); // токен который позволит управлять очередностью выполнения
    }

   }
export default ArticleStore;