import React, {Component} from 'react';
import BodyArticle from './BodyArticle';
import toggleOpen from './mixins/toggleOpen';
import toggleHint from './mixins/toggleHint';

let Article = React.createClass( {
    mixins : [toggleOpen, toggleHint],

    render() {
        const selectText = this.props.selected ? "deselect" : "select";
        const {isOpen} = this.state;
        return (
            <div>
                {this.getTitle()}
                {this.getHint()}
                <a href="#" onClick={this.select}>{selectText}</a>
                <div className="expandable" aria-expanded={isOpen}>{this.getBody()}</div>
            </div>
        )
    },

    getHint() {
        const { article} = this.props;
        const {isVisibleHint} = this.state;
        const className = "tooltip " + ( isVisibleHint ? '' : 'hide');

        return (
            <span className={className} >
                {article.body}
            </span>
        );
    },

    getTitle() {
        const { title} = this.props.article;

        return (
            <h3
                onClick={this.toggleOpen}
                onMouseEnter={this.toggleVisibleHint}
                onMouseLeave={this.toggleVisibleHint}
            >
                {title}
            </h3>
        );
    },

    getBody() {
        const { body, comments } = this.props.article;
        if (!this.state.isOpen) return null;

        return <BodyArticle text={body} comments={comments}/>;

    },

    select(event) {
        event.preventDefault();
        this.props.select();
    }

});
Article.propTypes = {
    article : React.PropTypes.object,

    selected : React.PropTypes.bool,
    select : React.PropTypes.func,

    //isOpen : React.PropTypes.bool,
    //toggleOpen : React.PropTypes.func,

    //isVisibleHint : React.PropTypes.bool,
    //toggleVisibleHint : React.PropTypes.func

};

export default Article;