import React, { Component } from "react";
import "./styles/delete.scss";

class Delete extends Component {
  state = {
    message: {},
  };
  displayMessageBox = () => {
    const message = { ...this.state.message };
    message.display = true;
    this.setState({ message });
  };

  hiddenMessageBox = () => {
    const message = { display: false };
    this.setState({ message });
  };

  handleDelete = () => {
    console.log(this.props)
    const { onDelete, item } = this.props;
    const message = { display: false };
    this.setState({ message });
    onDelete(item);
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <div onClick={this.displayMessageBox} className="btn-delete">
          <i className="fa fa-trash"></i>
        </div>
        {message.display && (
          <div className="box-message">
            <div className="box-message-wrapper">
              <h2>Bạn có chắc chắn muốn xóa sản phẩm này không?</h2>
              <div className="box-message-btn mt-4">
                <button
                  className="box-message-btn--cancel"
                  onClick={this.hiddenMessageBox}
                >
                  Hủy
                </button>
                <button
                  className="box-message-btn--delete"
                  onClick={this.handleDelete}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Delete;
