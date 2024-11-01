import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

 
    constructor() {
      super();
      this.state = {
        articles: [] 
      };
    }
  
    async componentDidMount() {
      // console.log("fetch");
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=70bc2cfd25f14eba866a7ec572c46d55";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
    }
  
    render() {
      return (
        <div className="container my-3">
          <h2>News-Daily Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
  

