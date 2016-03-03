import React, {Component} from 'react';
import toggleOpen from './HOC/toggleOpen';

class CommentsArticle extends React.Component {
    static propTypes = {
        comments: React.PropTypes.array,
        addComment : React.PropTypes.func,

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
                {this.getInputForAddingComments()}
                <ul className="comments">{this.getComments()}</ul>
            </div>
        );
    }

    getInputForAddingComments() {
        const {isOpen} = this.props;
        if (!isOpen && this.commentsExist()) return null;

        return (
            <div className="comments_add">
                <input placeholder="Please type new comment ... "  onKeyPress={this.inputKeyPressHandler.bind(this)}/>
            </div>
        );

    }
    inputKeyPressHandler (event) {
        if (event.key == "Enter") {


            // если у нас первый коммент, то проверяем раскрыты ли комменты
            if (!this.commentsExist() && !this.props.isOpen) {
                this.props.toggleOpen();
            }

            this.props.addComment(event.target.value);
            // очищаем ввод
            event.target.value = null;
        }
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