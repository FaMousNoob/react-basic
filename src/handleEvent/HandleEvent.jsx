import React, { Component } from 'react';

class HandleEvent extends Component {
  handleClick = () => {
    alert('alerting');
  };
  handleDelete = (id) => {
    alert(`the number is ${id}`);
  };
  handleSubmit = (event) => {
    //   tránh không load trang
    event.preventDefault();
    alert('run');
  };
  render() {
    return (
      <div>
        <h1>Handle Event</h1>
        <section>
          <h2>click</h2>
          <button className='btn btn-info' onClick={this.handleClick}>
            Notice me Senpai
          </button>
          {/* cách bắt sự kiện đối với tham số */}
          <button
            className='btn btn-danger'
            onClick={() => this.handleDelete(1)}
          >
            Delete
          </button>
        </section>
        <section>
          <h2>submit</h2>
          <form onSubmit={this.handleSubmit}>
            <button type='submit' className='btn btn-success'>
              submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default HandleEvent;
