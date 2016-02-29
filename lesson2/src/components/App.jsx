import React, { Component } from 'react';
import ArticleDataList from './../data/Articles';
import ArticleList from './ArticleList';

class App extends Component {
    static propTypes = {
        articles: React.PropTypes.array
    };

    render() {
        return (
            <ArticleList articles={ArticleDataList}/>
        );
    }
}
export default App;