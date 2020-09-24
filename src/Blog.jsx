import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = 'gitaro-p';
    return (
      <>
        <Article title={'Reactの学習'} order={1}/>
        <Article title={'jsxの使い方'} order={2}/>
        <Article title={'環境構築'} order={3}/>
      </>
    );
  }
}
export default Blog;
