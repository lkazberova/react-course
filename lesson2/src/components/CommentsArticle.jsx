import React, {Component} from 'react';
import toggleOpen from './HOC/toggleOpen';

class CommentsArticle extends React.Component {
    static propTypes = {
        comments: React.PropTypes.array,

        isOpen : React.PropTypes.bool,
        toggleOpen : React.PropTypes.func
    };

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.getCommentsLink()}
                <ul className="comments">{this.getComments()}</ul>
            </div>
        );
    }

    getCommentsLink () {
        if (!this.commentsExist()) return null;

        const {isOpen} = this.props;
        const commentsLinkText = !isOpen ? "Show" : "Hide";
        const commentsLength = this.props.comments.length;

        return (
            <a className="comments" href="#" onClick={this.props.toggleOpen.bind(this)}>
                {commentsLinkText} comments ({commentsLength})
            </a>
        );
    }

    getComments() {
        if (!this.props.isOpen) return null;
        return this.props.comments.map((comment) =>
            <li key={comment.id}>
                <blockquote>{comment.text}</blockquote>
            </li>);
    }

    commentsExist() {
        return this.props.comments && this.props.comments.length > 0;
    }

}

export default toggleOpen(CommentsArticle, false);