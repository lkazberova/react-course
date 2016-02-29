import React, {Component} from 'react';
import Article from './Article';
//import Article from './ArticleOld';

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
        return (
            <div>
                <ul className="articles">
                    {this.getArticles()}
                </ul>
            </div>
        )
    }

    getClassName(articleId) {
        return this.state.selectedArticles.includes(articleId) ? "selected" : null;
    }

    getArticles() {
        return this.props.articles.map((article) =>
            <li key={article.id} className={this.getClassName(article.id)}>
                <Article article={article}
                         select={this.select(article.id).bind(this)}
                         selected={this.state.selectedArticles.includes(article.id)}
                         isOpen={this.state.showedArticle == article.id}
                         toggleOpen={this.changeShownBody(article.id).bind(this)}/>
            </li>);
    }

    select(articleId) {
        return function () {
            const isSelectedArticle = !(this.state.selectedArticles.includes(articleId));

            this.setState({
                selectedArticles: isSelectedArticle ?
                    this.state.selectedArticles.concat(articleId) :
                    this.state.selectedArticles.filter((value) => value !== articleId)
            })
        };
    }

    changeShownBody(id) {
        return function () {
            const showArticle = !(this.state.showedArticle == id);
            this.setState({
                showedArticle: (showArticle ? id : null)
            });
        }
    }
}

export default ArticleList;