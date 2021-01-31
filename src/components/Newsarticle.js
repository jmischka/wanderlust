import React from 'react';

class Newsarticle extends React.Component {
    render() {
        const imgStyle = {backgroundImage: 'url(' + this.props.article.multimedia[0].url + ')',};
        return (
            <a className="news-article" target="blank" href={this.props.article.url}>
                <div className="news-img">
                    <div className="newsImg-container">
                        <span className="newsArticle-img" style={imgStyle}></span>
                    </div>
                </div>
                <div className="news-text">
                    <span className="news-articleHeadline">{this.props.article.title}</span>
                    <p className="news-articleSubhead">{this.props.article.abstract}</p>
                    <span className="news-articleByline">{this.props.article.byline}</span>
                </div>
            </a>
        );
    }
}

export default Newsarticle;
  