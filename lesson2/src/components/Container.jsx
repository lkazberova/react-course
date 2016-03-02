import React, {Component} from 'react';
import {articlesStore} from './stores';
import ArticleList from './ArticleList'

class Container extends Component {
    state = {
        articles : articlesStore.getAll()
    };
    componentDidMount () {
        articlesStore.addChangeListener(this.change);
    }
    change = () => {
        this.setState ({
            articles: articlesStore.getAll()
        });
    };

    componentWillUnmount() {
        articlesStore.removeChangeListener(this.change);
    }

    render() {
        return (
            <div>
                <ArticleList articles={this.state.articles}/>
            </div>
        );
    }
}

export default Container;