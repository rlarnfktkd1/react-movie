import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

// 모든 컴포넌트는 render function을 갖고있다.
// render는 뭔가 보여주고 출력하는 기능
class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> conponentDidUpdate
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster:
              "http://image-1.verycd.com/005fce3bebc2ae60f0ea344ec7c7d3a443432/folder-299492-1102568081.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster:
              "https://www.indiewire.com/wp-content/uploads/2017/07/full-metal-jacket-1987-03-g.jpg?w=780"
          },
          {
            title: "oldBoy",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title: "star wars",
            poster:
              "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F679399%252F49317ff3-3bfc-48e7-8686-155bada72c69.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=uROL96RCfvoEdLQC9ZN_sten-nc=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com"
          },
          {
            title: "Transformer",
            poster:
              "https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg"
          }
        ]
      });
    }, 5000);
  }
  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
