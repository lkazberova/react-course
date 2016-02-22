import React, { Component } from 'react';
import ArticleDataList from './../data/Articles';

class App extends Component {
    static propTypes = {
        articles : React.PropTypes.array
    };

    render() {
        return (
            <ArticleList articles={ArticleDataList}/>
        );
    }
}

class ArticleList extends React.Component {
    static propTypes = {
        articles: React.PropTypes.array
    };

    constructor() {
        super();
        this.state = {
            selectedArticles: [],
            showedArticle: null
        }
    }

    render() {
        const articles = this.props.articles.map((article) =>
            <li key={article.id} className={this.state.selectedArticles.includes(article.id) ? "selected" : null}>
                <Article article={article}
                         select={this.select.bind(this)}
                         selected={this.state.selectedArticles.includes(article.id)}
                         showBody={this.state.showedArticle == article.id}
                         changeShownBody={this.changeShownBody.bind(this)}/>
            </li>
        );
        return (
            <div>
                <ul className="articles">
                    {articles}
                </ul>
            </div>
        )
    }

    select(id, selected) {
        this.setState({
            selectedArticles: selected ?
                this.state.selectedArticles.concat(id) :
                this.state.selectedArticles.filter((value) => value !== id)
        })
    }

    changeShownBody(id, showed) {
        this.setState({
            showedArticle: (showed ? id : null)
        });
    }
}

class Article extends React.Component {
    render() {
        const { title, body, comments } = this.props.article;
        const bodyElement   = this.props.showBody ? <BodyArticle text={body} comments={comments}/> : null;
        const selectText    = this.props.selected ? "deselect" : "select";
        return (
            <div>
                <h3 onClick={this.handleClick.bind(this)}>{title}</h3>
                <a href="#" onClick={this.select.bind(this)}>{selectText}</a>
                {bodyElement}
            </div>
        )
    }

    select(ev) {
        ev.preventDefault();
        this.props.select(this.props.article.id, !this.props.selected);
    }

    handleClick() {
        this.props.changeShownBody(this.props.article.id, !this.props.showBody);
    }
}

class BodyArticle extends React.Component {
    static propTypes = {
        comments : React.PropTypes.array,
        text : React.PropTypes.string
    };
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <CommentsArticle comments={this.props.comments}/>
            </div>
        );
    }

}

class CommentsArticle extends React.Component {
    static propTypes = {
        comments : React.PropTypes.array,
        showComments : React.PropTypes.bool
    };

    constructor() {
        super();
        this.state = {
            showComments: false
        };
    }

    render() {
        const commentsElement = this.state.showComments ? this.props.comments.map((comment) =>
            <li key={comment.id}>
                <blockquote>{comment.text}</blockquote>
            </li>
        ) : null;
        const commentsLinkText = !this.state.showComments ? "Show" : "Hide";
        const commentsLink = this.commentsExist() ?
            <a className="comments" href="#" onClick={this.showComments.bind(this)}>
                {commentsLinkText} comments ({this.props.comments.length})
            </a> : null;

        return (
            <div>
                {commentsLink}
                <ul className="comments" >{commentsElement}</ul>
            </div>
        );
    }

    commentsExist () {
        return this.props.comments && this.props.comments.length > 0;
    }

    showComments() {
        this.setState({
            showComments: !this.state.showComments
        });
    }
}


export default App;