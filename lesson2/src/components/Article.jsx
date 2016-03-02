import React, {Component} from 'react';
import BodyArticle from './BodyArticle';
import toggleOpen from './HOC/toggleOpen';
import toggleHint from './HOC/toggleHint';
import {deleteArticle} from './actions/articles';
import {addComment} from './actions/comments';

class Article extends React.Component {
    static propTypes = {
        article : React.PropTypes.object,

        selected : React.PropTypes.bool,
        select : React.PropTypes.func,

        isOpen : React.PropTypes.bool,
        toggleOpen : React.PropTypes.func,

        isVisibleHint : React.PropTypes.bool,
        toggleVisibleHint : React.PropTypes.func
    };

    render() {
        const selectText = this.props.selected ? "deselect" : "select";
        const {isOpen} = this.props;
        return (
            <div>
                {this.getTitle()}
                {this.getHint()}
                <a href="#" onClick={this.select.bind(this)}>{selectText} </a>
                <a href="#" onClick = {this.deleteCurrentArticle} >delete</a>
                <div className="expandable" aria-expanded={isOpen}>{this.getBody()}</div>
            </div>
        )
    }
    getHint() {
        const {isVisibleHint, article} = this.props;
        const className = "tooltip " + ( isVisibleHint ? '' : 'hide');

        return (
            <span className={className} >
                {article.body}
            </span>
        );
    }
    deleteCurrentArticle = () => {
        deleteArticle(this.props.article.id);
    };

    addCommentToCurrentArticle = (commentText) => {
        addComment(commentText, this.props.article.id);
    };

    getTitle() {
        const { title} = this.props.article;

        return (
            <h3
                onClick={this.props.toggleOpen.bind(this)}
                onMouseEnter={this.props.toggleVisibleHint.bind(this)}
                onMouseLeave={this.props.toggleVisibleHint.bind(this)}
            >
                {title}
            </h3>
        );
    }

    getBody() {
        const article = this.props.article;
        if (!this.props.isOpen) return null;

        return <BodyArticle text={article.body} comments={article.getRelation('comments').reverse()} addComment={this.addCommentToCurrentArticle}/>;

    }


    select(event) {
        event.preventDefault();
        this.props.select();
    }

}

export default toggleHint(toggleOpen(Article));