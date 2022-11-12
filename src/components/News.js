import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export default class News extends Component {
  articles = [""];
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = this.props.category;
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=97e5e84264e54ffa8f2c82cfbdef5851&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apikey=97e5e84264e54ffa8f2c82cfbdef5851&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apikey=97e5e84264e54ffa8f2c82cfbdef5851&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">
            NewsMonkey - Top headlines from {this.props.category} news
          </h1>
          <spinner />

          <div className="row ">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handlePreviousClick}
              className="btn btn-dark"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={this.handleNextClick}
              className="btn btn-dark"
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
