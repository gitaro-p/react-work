import React from 'react';
import Article from './Article';

const Blog = () => {
  // componentDidMount() {
  //   //ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById('counter').addEventListener('click', this.countUp);
  // }

  // componentDidUpdate() {
  //   if (this.state.count >= 10) {
  //     this.setState({ count: 0 });
  //   }
  // }

  // componentWillUnmount() {
  //   document
  //     .getElementById('counter')
  //     .removeEventListener('click', this.countUp);
  // }

  // //　公開状態を反転させる関数
  // togglePublished = () => {
  //   this.setState({
  //     isPublished: !this.state.isPublished
  //   });
  // };

  // countUp = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  return (
    <>
      <Article
        title={'Reactの学習'}
        //count={this.state.count}
      />
    </>
  );
};

export default Blog;
