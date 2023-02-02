import React, { Component } from 'react';
import { FaTwitter } from "react-icons/fa";
import './App.css';

class App extends Component{
  
  constructor(props){
    super(props);
      this.state = {
        todoList:[],
        }
      
      this.fetchTasks = this.fetchTasks.bind(this)

  };

  componentDidMount(){
    document.title = "Cryptocurrency Hub";
    this.fetchTasks()
  }
  
  fetchTasks(){
    fetch('api/api-overview', {
    method: "GET",
    credentials: "same-origin",  
    headers: {
        'Accept': 'application/json',
        "Content-Type": 'application/json',
      },
      body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data =>
      this.setState({
        todoList:data
      })
      )
  }

  render(){
    var tasks = this.state.todoList
    return (
    
      <div className="background">
        <div className="container"> 
      
            <div className="grid">       
              <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Current Price:</b> {tasks.bitcoin_price}</span>
                  </div>
                </div>
              </div>
            
              <div className="center-column-coin-name">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Bitcoin</b> ({tasks.bitcoin_symbol})</span>
                  </div>
                </div>
              </div>     

             <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Daily Price Change:</b> {tasks.bitcoin_dailychange}</span>
                  </div>
                </div>
              </div>  
            </div>

              <div className="center-column-tweet">
                <div className="item-row-tweets">
                  <div className="left">
                    <span><b><FaTwitter/></b> <b>@{tasks.bitcoin_tweet_user}:</b><br/><br/>"{tasks.bitcoin_tweet}"<br/><br/><b>Link:</b> <a href={ "https://twitter.com/twitter/statuses/"+tasks.bitcoin_tweet_link }>https://twitter.com/twitter/statuses/{tasks.bitcoin_tweet_link}</a></span>
                  </div>
                </div>
              </div>
            
            
            <div className="grid">
              <div className="center-column">
                  <div className="item-row">
                    <div className="centered">
                      <span><b>Current Price:</b> {tasks.litecoin_price}</span>
                    </div>
                  </div>
                </div>
            
              <div className="center-column-coin-name">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Litecoin</b> ({tasks.litecoin_symbol})</span>
                  </div>
                </div>
              </div>   

              <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Daily Price Change:</b> {tasks.litecoin_dailychange}</span>
                  </div>
                </div>
              </div>   
            </div>

              <div className="center-column-tweet">
                <div className="item-row-tweets">
                  <div className="left">
                  <span><b><FaTwitter/></b> <b>@{tasks.litecoin_tweet_user}:</b><br/><br/>"{tasks.litecoin_tweet}"<br/><br/><b>Link:</b><a href={ "https://twitter.com/twitter/statuses/"+tasks.litecoin_tweet_link }> https://twitter.com/twitter/statuses/{tasks.litecoin_tweet_link}</a></span>
                  </div>
                </div>
              </div>  
            

            <div className="grid">
              <div className="center-column">
                  <div className="item-row">
                    <div className="centered">
                      <span><b>Current Price:</b> {tasks.ethereum_price}</span>
                    </div>
                  </div>
                </div>

              <div className="center-column-coin-name">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Ethereum</b> ({tasks.ethereum_symbol})</span>
                  </div>
                </div>
              </div>     
              
              <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Daily Price Change:</b> {tasks.ethereum_dailychange}</span>
                  </div>
                </div>
              </div>
            </div>

              <div className="center-column-tweet">
                <div className="item-row-tweets">
                  <div className="left">
                  <span><b><FaTwitter/></b> <b>@{tasks.ethereum_tweet_user}:</b><br/><br/>"{tasks.ethereum_tweet}"<br/><br/><b>Link:</b><a href={ "https://twitter.com/twitter/statuses/"+tasks.ethereum_tweet_link }> https://twitter.com/twitter/statuses/{tasks.ethereum_tweet_link}</a></span>
                  </div>
                </div>
              </div>
           
            
            <div className="grid">
              <div className="center-column">
                  <div className="item-row">
                    <div className="centered">
                      <span><b>Current Price:</b> {tasks.binancecoin_price}</span>
                    </div>
                  </div>
                </div> 
          
              <div className="center-column-coin-name">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Binancecoin</b> ({tasks.binancecoin_symbol})</span>
                  </div>
                </div>
              </div>     

               <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Daily Price Change:</b> {tasks.binancecoin_dailychange}</span>
                  </div>
                </div>
              </div>  
            </div>

              <div className="center-column-tweet">
                <div className="item-row-tweets">
                  <div className="left">
                  <span><b><FaTwitter/></b> <b>@{tasks.binancecoin_tweet_user}:</b><br/><br/>"{tasks.binancecoin_tweet}"<br/><br/><b>Link:</b><a href={ "https://twitter.com/twitter/statuses/"+tasks.binancecoin_tweet_link }> https://twitter.com/twitter/statuses/{tasks.binancecoin_tweet_link}</a></span>
                  </div>
                </div>
              </div>
            

            <div className="grid">
              <div className="center-column">
                  <div className="item-row">
                    <div className="centered">
                      <span><b>Current Price:</b> {tasks.tron_price}</span>
                    </div>
                  </div>
                </div>

              <div className="center-column-coin-name">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Tron</b> ({tasks.tron_symbol})</span>
                  </div>
                </div>
              </div>     
                            
              <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Daily Price Change:</b> {tasks.tron_dailychange}</span>
                  </div>
                </div>
              </div>
            </div>

              <div className="center-column-tweet">
                <div className="item-row-tweets">
                  <div className="left">
                  <span><b><FaTwitter/></b> <b>@{tasks.tron_tweet_user}:</b><br/><br/>"{tasks.tron_tweet}"<br/><br/><b>Link:</b><a href={ "https://twitter.com/twitter/statuses/"+tasks.tron_tweet_link }> https://twitter.com/twitter/statuses/{tasks.tron_tweet_link}</a></span>
                  </div>
                </div>
              </div>
           

            <div className="grid">
              <div className="center-column">
                  <div className="item-row">
                    <div className="centered">
                      <span><b>Current Price:</b> {tasks.chainlink_price}</span>
                    </div>
                  </div>
                </div>
              
              <div className="center-column-coin-name">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Chainlink</b> ({tasks.chainlink_symbol})</span>
                  </div>
                </div>
              </div>     
              
              <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Daily Price Change:</b> {tasks.chainlink_dailychange}</span>
                  </div>
                </div>
              </div>
            </div>

              <div className="center-column-tweet">
                <div className="item-row-tweets">
                  <div className="left">
                  <span><b><FaTwitter/></b> <b>@{tasks.chainlink_tweet_user}:</b><br/><br/>"{tasks.chainlink_tweet}"<br/><br/><b>Link:</b><a href={ "https://twitter.com/twitter/statuses/"+tasks.chainlink_tweet_link }> https://twitter.com/twitter/statuses/{tasks.chainlink_tweet_link}</a></span>
                  </div>
                </div>
              </div>
            
            
            <div className="grid">
              <div className="center-column">
                  <div className="item-row">
                    <div className="centered">
                      <span><b>Current Price:</b> {tasks.dogecoin_price}</span>
                    </div>
                  </div>
                </div>
              
              <div className="center-column-coin-name">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Dogecoin</b> ({tasks.dogecoin_symbol})</span>
                  </div>
                </div>
              </div>     
              
              <div className="center-column">
                <div className="item-row">
                  <div className="centered">
                    <span><b>Daily Price Change:</b> {tasks.dogecoin_dailychange}</span>
                  </div>
                </div>
              </div>
            </div>

              <div className="center-column-tweet">
                <div className="item-row-tweets">
                  <div className="left">
                  <span><b><FaTwitter/></b> <b>@{tasks.dogecoin_tweet_user}:</b><br/><br/>"{tasks.dogecoin_tweet}"<br/><br/><b>Link:</b><a href={ "https://twitter.com/twitter/statuses/"+tasks.dogecoin_tweet_link }> https://twitter.com/twitter/statuses/{tasks.dogecoin_tweet_link}</a></span>
                  </div>
                </div>
              </div>
            
        </div>
        </div>
    );
  }
}
export default App;
