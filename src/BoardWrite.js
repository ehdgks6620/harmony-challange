import axios from "axios";
import React, { Component } from "react";
import "./style/BoardWrite.css";

axios.defaults.withCredentials = true;

class BoardWrite extends Component {
  state = {
    file: null,
  };

  handleFileInput = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  handlePost = (e) => {
    e.preventDefault();
    var formData = new FormData();

    formData.append("file", this.state.file);

    const params = {
      title: this.writeTitle.value,
      content: this.writeContent.value,
      file: formData,
    };
    console.log(formData);
    console.log(this.state.file);

    axios
      .post("http://localhost:8080/board/write", params)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message) {
          console.log(res.data.result);
        } else {
          window.location.href = "/wirte";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="god">
        <div className="writeForm">
          <h4>EVERY TIME</h4>
          <table>
            <tr className="writeTR">
              <th width="100px" className="writeTH">
                <label className="writeLabel">제목</label>
              </th>
              <tr className="writeTR">
                <input
                  className="writeTitle"
                  type="text"
                  ref={(ref) => (this.writeTitle = ref)}
                  placeholder="제목"
                ></input>
              </tr>
            </tr>
            <tr className="writeTR">
              <th width="100px" className="writeTH">
                <label className="writeLabel">내용</label>
              </th>
              <tr className="writeTR">
                <textarea
                  className="writeContent"
                  ref={(ref) => (this.writeContent = ref)}
                ></textarea>
              </tr>
            </tr>
            <tr className="writeTR">
              <th width="100px" className="writeTH">
                <label className="writeLabel">파일</label>
              </th>
              <tr className="writeTR">
                <input
                  className="writeFiles"
                  type="file"
                  name="file"
                  ref={(ref) => (this.writeFile = ref)}
                  onChange={this.handleFileInput}
                ></input>
              </tr>
            </tr>
          </table>
          <button
            className="writeBtn"
            onClick={this.handlePost}
            type="button"
            block
          >
            게시판 이동
          </button>
        </div>
      </div>
    );
  }
}

export default BoardWrite;
