class TweetItem extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{color: 'blue'}}>{this.props.name} <span>@{this.props.screen_name}</span></h3>
        <p>Text: {this.props.text}</p>
        <p>Retweet: {this.props.retweet_count} Favorites: {this.props.favorite_count}</p>
        <hr></hr>
      </div>
    );
  }
}


class Tweet extends React.Component {

    render() {
        let tweetsElements = this.props.tweets.map( (tweet, index) => {
                              return <TweetItem key={tweet.id} 
                              text={tweet.text} 
                              name={tweet.user.name}
                              screen_name={tweet.user.screen_name}
                              retweet_count={tweet.retweet_count}
                              favorite_count={tweet.favorite_count}>
                              </TweetItem>
                            });
        return (
          <div>
            {tweetsElements}
          </div>
        );
    }
}

ReactDOM.render(
    <Tweet tweets = {tweets} />,
    document.getElementById('root')
);
