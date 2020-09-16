import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/Body.css";

class Body extends Component {
  state = {};

  btnClick = (e) => {
    e.preventDefault();
    const subject = this.subject.value;
    const professor = this.professor.value;
    const classic = this.class.value;
    this.props.history.push({
      pathname: `/board/${subject}/${professor}/${classic}`,
      state: { subject, professor, classic },
    });
  };
  componentDidMount() {
    if (this.props.history.location.state !== undefined) {
      alert(this.props.history.location.state);
      console.log(this.props.history.location.state);
    }
    console.log(this.props);
  }

  render() {
    return (
      <div className="god">
        <div className="bodyForm">
          <h4>EVERY TIME</h4>
          <section className="bodySection">
            <label className="bodyClasses">강좌명</label>
            <select
              className="bodySelection"
              ref={(ref) => (this.subject = ref)}
            >
              <option className="bodyOpt" value="a">
                일반화학
              </option>
              <option className="bodyOpt" value="b">
                일반화학
              </option>
              <option className="bodyOpt" value="c" selected>
                일반화학
              </option>
            </select>
          </section>
          <section className="bodySection">
            <label className="bodyClasses">교수명</label>
            <select
              className="bodySelection"
              ref={(ref) => (this.professor = ref)}
            >
              <option className="bodyOpt" value="a">
                김동한
              </option>
              <option className="bodyOpt" value="b">
                신정민
              </option>
              <option className="bodyOpt" value="c" selected>
                한상우
              </option>
            </select>
          </section>
          <section className="bodySection">
            <label className="bodyClasses">분반</label>
            <select className="bodySelection" ref={(ref) => (this.class = ref)}>
              <option className="bodyOpt" value="a">
                1
              </option>
              <option className="bodyOpt" value="b">
                2
              </option>
              <option className="bodyOpt" value="c" selected>
                3
              </option>
            </select>
          </section>
          <span className="bodySpan">
            해당 선택사항에 따른 페이지 이동이 됩니다.
          </span>
          <button
            className="bodyBtn"
            onClick={this.btnClick}
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

export default Body;
