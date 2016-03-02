import React, { Component } from 'react';
import ArticleDataList from './../data/Articles';
import Container from './Container';

class App extends Component {
    static propTypes = {
        articles: React.PropTypes.array
    };

    render() {
        return (
            <Container />
        );
    }
}
export default App;