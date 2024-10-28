import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News-Daily Top Headlince</h2>
        <div className="row">
          <div className="col-md-3">
            <NewsItem
              title="This is title"
              description="This is description"
              imgUrl=""
            />
          </div>
          <div className="col-md-3" >
            <NewsItem
              title="This is title"
              imgUrl=""
              description={
                <>
                  This is <strong>our</strong> description
                </>
              }
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="This is title"
              description={
                <>
                  This is <strong>our</strong> description
                </>
              }
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="This is title"
              description={
                <>
                  This is <strong>our</strong> description
                </>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
