(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{15:function(e,c,t){},16:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t.n(s),n=t(6),j=t.n(n),r=(t(15),t(7)),l=t(9),a=t(4),d=t(10),b=t(8),h=t(2),O=(t(16),t(0)),x=function(e){Object(d.a)(t,e);var c=Object(b.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=c.call(this,e)).state={todoList:[]},s.fetchTasks=s.fetchTasks.bind(Object(a.a)(s)),s}return Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="Cryptocurrency Hub",this.fetchTasks()}},{key:"fetchTasks",value:function(){var e=this;fetch("api/api-overview",{method:"GET",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(c){return e.setState({todoList:c})}))}},{key:"render",value:function(){var e=this.state.todoList;return Object(O.jsx)("div",{className:"background",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"grid",children:[Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Current Price:"})," ",e.bitcoin_price]})})})}),Object(O.jsx)("div",{className:"center-column-coin-name",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Bitcoin"})," (",e.bitcoin_symbol,")"]})})})}),Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Daily Price Change:"})," ",e.bitcoin_dailychange]})})})})]}),Object(O.jsx)("div",{className:"center-column-tweet",children:Object(O.jsx)("div",{className:"item-row-tweets",children:Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:Object(O.jsx)(h.a,{})})," ",Object(O.jsxs)("b",{children:["@",e.bitcoin_tweet_user,":"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),'"',e.bitcoin_tweet,'"',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Link:"})," ",Object(O.jsxs)("a",{href:"https://twitter.com/twitter/statuses/"+e.bitcoin_tweet_link,children:["https://twitter.com/twitter/statuses/",e.bitcoin_tweet_link]})]})})})}),Object(O.jsxs)("div",{className:"grid",children:[Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Current Price:"})," ",e.litecoin_price]})})})}),Object(O.jsx)("div",{className:"center-column-coin-name",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Litecoin"})," (",e.litecoin_symbol,")"]})})})}),Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Daily Price Change:"})," ",e.litecoin_dailychange]})})})})]}),Object(O.jsx)("div",{className:"center-column-tweet",children:Object(O.jsx)("div",{className:"item-row-tweets",children:Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:Object(O.jsx)(h.a,{})})," ",Object(O.jsxs)("b",{children:["@",e.litecoin_tweet_user,":"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),'"',e.litecoin_tweet,'"',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Link:"}),Object(O.jsxs)("a",{href:"https://twitter.com/twitter/statuses/"+e.litecoin_tweet_link,children:[" https://twitter.com/twitter/statuses/",e.litecoin_tweet_link]})]})})})}),Object(O.jsxs)("div",{className:"grid",children:[Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Current Price:"})," ",e.ethereum_price]})})})}),Object(O.jsx)("div",{className:"center-column-coin-name",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Ethereum"})," (",e.ethereum_symbol,")"]})})})}),Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Daily Price Change:"})," ",e.ethereum_dailychange]})})})})]}),Object(O.jsx)("div",{className:"center-column-tweet",children:Object(O.jsx)("div",{className:"item-row-tweets",children:Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:Object(O.jsx)(h.a,{})})," ",Object(O.jsxs)("b",{children:["@",e.ethereum_tweet_user,":"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),'"',e.ethereum_tweet,'"',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Link:"}),Object(O.jsxs)("a",{href:"https://twitter.com/twitter/statuses/"+e.ethereum_tweet_link,children:[" https://twitter.com/twitter/statuses/",e.ethereum_tweet_link]})]})})})}),Object(O.jsxs)("div",{className:"grid",children:[Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Current Price:"})," ",e.binancecoin_price]})})})}),Object(O.jsx)("div",{className:"center-column-coin-name",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Binancecoin"})," (",e.binancecoin_symbol,")"]})})})}),Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Daily Price Change:"})," ",e.binancecoin_dailychange]})})})})]}),Object(O.jsx)("div",{className:"center-column-tweet",children:Object(O.jsx)("div",{className:"item-row-tweets",children:Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:Object(O.jsx)(h.a,{})})," ",Object(O.jsxs)("b",{children:["@",e.binancecoin_tweet_user,":"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),'"',e.binancecoin_tweet,'"',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Link:"}),Object(O.jsxs)("a",{href:"https://twitter.com/twitter/statuses/"+e.binancecoin_tweet_link,children:[" https://twitter.com/twitter/statuses/",e.binancecoin_tweet_link]})]})})})}),Object(O.jsxs)("div",{className:"grid",children:[Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Current Price:"})," ",e.tron_price]})})})}),Object(O.jsx)("div",{className:"center-column-coin-name",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Tron"})," (",e.tron_symbol,")"]})})})}),Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Daily Price Change:"})," ",e.tron_dailychange]})})})})]}),Object(O.jsx)("div",{className:"center-column-tweet",children:Object(O.jsx)("div",{className:"item-row-tweets",children:Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:Object(O.jsx)(h.a,{})})," ",Object(O.jsxs)("b",{children:["@",e.tron_tweet_user,":"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),'"',e.tron_tweet,'"',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Link:"}),Object(O.jsxs)("a",{href:"https://twitter.com/twitter/statuses/"+e.tron_tweet_link,children:[" https://twitter.com/twitter/statuses/",e.tron_tweet_link]})]})})})}),Object(O.jsxs)("div",{className:"grid",children:[Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Current Price:"})," ",e.chainlink_price]})})})}),Object(O.jsx)("div",{className:"center-column-coin-name",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Chainlink"})," (",e.chainlink_symbol,")"]})})})}),Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Daily Price Change:"})," ",e.chainlink_dailychange]})})})})]}),Object(O.jsx)("div",{className:"center-column-tweet",children:Object(O.jsx)("div",{className:"item-row-tweets",children:Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:Object(O.jsx)(h.a,{})})," ",Object(O.jsxs)("b",{children:["@",e.chainlink_tweet_user,":"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),'"',e.chainlink_tweet,'"',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Link:"}),Object(O.jsxs)("a",{href:"https://twitter.com/twitter/statuses/"+e.chainlink_tweet_link,children:[" https://twitter.com/twitter/statuses/",e.chainlink_tweet_link]})]})})})}),Object(O.jsxs)("div",{className:"grid",children:[Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Current Price:"})," ",e.dogecoin_price]})})})}),Object(O.jsx)("div",{className:"center-column-coin-name",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Dogecoin"})," (",e.dogecoin_symbol,")"]})})})}),Object(O.jsx)("div",{className:"center-column",children:Object(O.jsx)("div",{className:"item-row",children:Object(O.jsx)("div",{className:"centered",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:"Daily Price Change:"})," ",e.dogecoin_dailychange]})})})})]}),Object(O.jsx)("div",{className:"center-column-tweet",children:Object(O.jsx)("div",{className:"item-row-tweets",children:Object(O.jsx)("div",{className:"left",children:Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:Object(O.jsx)(h.a,{})})," ",Object(O.jsxs)("b",{children:["@",e.dogecoin_tweet_user,":"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),'"',e.dogecoin_tweet,'"',Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Link:"}),Object(O.jsxs)("a",{href:"https://twitter.com/twitter/statuses/"+e.dogecoin_tweet_link,children:[" https://twitter.com/twitter/statuses/",e.dogecoin_tweet_link]})]})})})})]})})}}]),t}(s.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(c){var t=c.getCLS,s=c.getFID,i=c.getFCP,n=c.getLCP,j=c.getTTFB;t(e),s(e),i(e),n(e),j(e)}))};j.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.23fc8b92.chunk.js.map