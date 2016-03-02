import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher';
import {ADD_COMMENT} from '../actions/constants';

class CommentStore  extends SimpleStore{
    constructor(...args) {
        super(...args);
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data : {articleId, comment}} = action;

            switch (type) {
                case ADD_COMMENT :
                    let addedComment = this.add(comment);

                    //чтобы было доступно  id добавленного коммента далее в цепочке, но мне кажется это грязновато ((
                    // я бы лучше завела ADDED_COMMENT дополнительно
                    comment.id = addedComment.id;

                    break;
            }
        }); // токен который позволит управлять очередностью выполнения
    }

}
export default CommentStore;