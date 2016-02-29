import React, {Component} from 'react';
import BodyArticle from './BodyArticle';
import toggleOpen from './HOC/toggleOpen';
import toggleHint from './HOC/toggleHint';

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
                <a href="#" onClick={this.select.bind(this)}>{selectText}</a>
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
        const { body, comments } = this.props.article;
        if (!this.props.isOpen) return null;

        return <BodyArticle text={body} comments={comments}/>;

    }

    select(event) {
        event.preventDefault();
        this.props.select();
    }

}

export default toggleHint(toggleOpen(Article));