import React, {Component} from 'react';
import CommentsArticle from './CommentsArticle';

class BodyArticle extends React.Component {
    static propTypes = {
        comments: React.PropTypes.array,
        text: React.PropTypes.string
    };

    constructor() {
        super();
    }

    render() {
        const {text, comments} = this.props;
        return (
            <div>
                <p>{text}</p>
                <CommentsArticle comments={comments}/>
            </div>
        );
    }
}

export default BodyArticle;