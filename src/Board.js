import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style/Board.css";
axios.defaults.withCredentials = true;

class BoardRow extends Component {
  render() {
    const { idx, title, content, created } = this.props;
    return (
      <div className="rowContainer">
        <Link to={{ pathname: "/gram", state: { idx } }}>
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
          <span>{this.props.created.substring(5, 10)} | 익명</span>
          <div className="rowImg"></div>
        </Link>
      </div>
    );
  }
}

class Board extends Component {
  state = {
    isLoading: true,
    boardList: [],
  };

  getBoard() {
    console.log(this.props);
    var boardSub = this.props.match.params.subject;
    var boardPro = this.props.match.params.professor;
    var boardClass = this.props.match.params.class;

    var params = {
      sub: boardSub,
      pro: boardPro,
      class: boardClass,
    };
    axios
      .post("http://localhost:8080/board/", params)
      .then((returnData) => {
        const result = returnData.data.result;

        const boardList = result.map((list) => (
          <BoardRow
            key={list.idx}
            idx={list.idx}
            title={list.title}
            content={list.content}
            file={list.file}
            created={list.created}
            comment={list.comment}
            sub={list.sub}
            pro={list.pro}
            class={list.class}
          ></BoardRow>
        ));
        this.setState({
          boardList: boardList,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getBoard();
    var isLoading = false;
    this.setState({
      isLoading: isLoading,
    });
  }

  render() {
    var { isLoading, boardList } = this.state;
    return (
      <div className="god">
        {isLoading ? (
          "LOADING.."
        ) : (
          <div className="boardForm">
            <div className="boardMain">
              <section className="boardTop">B</section>
              <section className="boardBottom">{boardList}</section>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Board;
