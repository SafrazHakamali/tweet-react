import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';

class App extends React.Component {
  render() {
  	const all = tweets.tweets;
    return (
      <div>
        <Tweets hello={all}/>
      </div>
    );
  };
};

class Tweets extends React.Component {
  render () {
    let list = this.props.hello.map(tweet => {
      return 
      <Tweet name={tweet.user.name}>
    });
    return (
      <div>{list}</div>
    );
  };
};


class Tweet extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.name}</div> 
      </div>
    );
  };
};

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
