import React from 'react';
import Newsarticle from './Newsarticle';
require('dotenv').config()


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${process.env.REACT_APP_NYTIMES_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({articles: data.results.filter(result => result.section === "travel")}));
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="news-section">
        <h2>Inspire The Dream</h2>
        <p>Stimulate your travel fantasies. Read up-to-date travel articles courtesy of The New York Times API.</p>
        <div className="newsArticle-Container">
          {articles.map((article,index) => <Newsarticle key={index} article={article} text='text' />)}
        </div>
      </div>
    );
  }
}

export default News;
  