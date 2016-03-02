import React, {Component} from 'react';
import CommentsArticle from './CommentsArticle';

class BodyArticle extends React.Component {
    static propTypes = {
        comments: React.PropTypes.array,
        text: React.PropTypes.string,
        addComment : React.PropTypes.func
    };

    constructor() {
        super();
    }

    render() {
        const {text, comments, addComment} = this.props;
        return (
            <div>
                <p>{text}</p>
                <CommentsArticle comments={comments} addComment={addComment}/>
            </div>
        );
    }
}

export default BodyArticle;