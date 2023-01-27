from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.decorators import api_view
from rest_framework.response import Response



import requests
from bs4 import BeautifulSoup


import tweepy
import webbrowser
import time

### access keys to get into twitter API ###
API_KEY = "Cp7zIAnRz529VPGCNeWB38x1W"
API_SECRET_KEY = "jnDFnM7jYCt1HmbHvGALyK6WC13uwLW8J0X6jpZB5frOaVCMjj"
ACCESS_TOKEN = "1361381642686894086-1wpw3IAhErR618dnsjU6rsYpj9mRmM"
ACCESS_SECRET_TOKEN = "tiveRwA2Hr3pCfF0XOG1Equcu0hznG4aPAvX3aunBVZ1V"

auth = tweepy.OAuthHandler(API_KEY, API_SECRET_KEY)
auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET_TOKEN)
api = tweepy.API(auth)

### my twitter user ###
me = api.me()


### Create your views here ###
def home(request):
    return render(request, 'index.html') 



@api_view(['GET'])
def apiOverview(request):
        
    ### WEBSCRAPE LOGIC - STOCK PRICES FROM YAHOO ###
    mystocks = ['BTC-USD', 'LTC-USD', 'ETH-USD', 'BNB-USD', 'TRX-USD', 'LINK-USD', 'DOGE-USD'] 
    stockdata = []

    def getData(symbol):
        headers= {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'}
        

        ### Yahoo Urls to scrape from ###
        url = f'https://finance.yahoo.com/quote/{symbol}/'
        
        r = requests.get(url, headers=headers) 
        soup = BeautifulSoup(r.text, 'html.parser')
        stock = {
        'symbol': symbol,   
        'price': soup.find('fin-streamer', {'class': 'Fw(b) Fz(36px) Mb(-4px) D(ib)'}).text,
        'change': soup.find('div', {'class':'D(ib) Mend(20px)'}).find_all('span')[0].text,
        }

        return stock
    
    for item in mystocks:
        stockdata.append(getData(item))
        

    ### Data broken out to render to template ###
    bitcoin_stockdata = stockdata[0]
    bitcoin_stockdatalist = list(bitcoin_stockdata.values())
    bitcoin_symbol = bitcoin_stockdatalist[0]
    bitcoin_price = bitcoin_stockdatalist[1]
    bitcoin_dailychange = bitcoin_stockdatalist[2]
    
    litecoin_stockdata = stockdata[1]
    litecoin_stockdatalist = list(litecoin_stockdata.values())
    litecoin_symbol = litecoin_stockdatalist[0]
    litecoin_price = litecoin_stockdatalist[1]
    litecoin_dailychange = litecoin_stockdatalist[2]

    ethereum_stockdata = stockdata[2]
    ethereum_stockdatalist = list(ethereum_stockdata.values())
    ethereum_symbol = ethereum_stockdatalist[0]
    ethereum_price = ethereum_stockdatalist[1]
    ethereum_dailychange = ethereum_stockdatalist[2]

    binancecoin_stockdata = stockdata[3]
    binancecoin_stockdatalist = list(binancecoin_stockdata.values())
    binancecoin_symbol = binancecoin_stockdatalist[0]
    binancecoin_price = binancecoin_stockdatalist[1]
    binancecoin_dailychange = binancecoin_stockdatalist[2]

    tron_stockdata = stockdata[4]
    tron_stockdatalist = list(tron_stockdata.values())
    tron_symbol = tron_stockdatalist[0]
    tron_price = tron_stockdatalist[1]
    tron_dailychange = tron_stockdatalist[2]

    chainlink_stockdata = stockdata[5]
    chainlink_stockdatalist = list(chainlink_stockdata.values())
    chainlink_symbol = chainlink_stockdatalist[0]
    chainlink_price = chainlink_stockdatalist[1]
    chainlink_dailychange = chainlink_stockdatalist[2]

    dogecoin_stockdata = stockdata[6]
    dogecoin_stockdatalist = list(dogecoin_stockdata.values())
    dogecoin_symbol = dogecoin_stockdatalist[0]
    dogecoin_price = dogecoin_stockdatalist[1]
    dogecoin_dailychange = dogecoin_stockdatalist[2]




    ### WEBSCRAPE STOCK TWEETS FROM TWEEPY ###
    query_bitcoin = 'bitcoin'
    for i, status in enumerate(tweepy.Cursor(api.search, q=query_bitcoin, lang='en', result_type='recent', filter='verified').items(1)):
        bitcoin_tweet = (status.author.screen_name ,status.text ,status.id)

    query_litecoin = 'litecoin'
    for i, status in enumerate(tweepy.Cursor(api.search, q=query_litecoin, lang='en', result_type='recent', filter='verified').items(1)):
        litecoin_tweet = (status.author.screen_name ,status.text ,status.id)

    query_ethereum = 'ethereum'
    for i, status in enumerate(tweepy.Cursor(api.search, q=query_ethereum, lang='en', result_type='recent', filter='verified').items(1)):
        ethereum_tweet = (status.author.screen_name ,status.text ,status.id)

    query_binancecoin = 'binance'
    for i, status in enumerate(tweepy.Cursor(api.search, q=query_binancecoin, lang='en', result_type='recent', filter='verified').items(1)):
        binancecoin_tweet = (status.author.screen_name ,status.text ,status.id)

    query_tron = 'tron'
    for i, status in enumerate(tweepy.Cursor(api.search, q=query_tron, lang='en', result_type='recent', filter='verified').items(1)):
        tron_tweet = (status.author.screen_name ,status.text ,status.id)

    query_chainlink = 'chainlink'
    for i, status in enumerate(tweepy.Cursor(api.search, q=query_chainlink, lang='en', result_type='recent', filter='verified').items(1)):
        chainlink_tweet = (status.author.screen_name ,status.text ,status.id)

    query_dogecoin = 'dogecoin'
    for i, status in enumerate(tweepy.Cursor(api.search, q=query_dogecoin, lang='en', result_type='recent', filter='verified').items(1)):
        dogecoin_tweet = (status.author.screen_name ,status.text ,status.id)

    


    api_urls = {
        'bitcoin_symbol' : bitcoin_symbol,
        'bitcoin_price' : bitcoin_price,
        'bitcoin_dailychange' : bitcoin_dailychange,
        'litecoin_symbol' : litecoin_symbol,
        'litecoin_price' : litecoin_price,
        'litecoin_dailychange' : litecoin_dailychange,
        'ethereum_symbol' : ethereum_symbol,
        'ethereum_price' : ethereum_price,
        'ethereum_dailychange' : ethereum_dailychange,
        'binancecoin_symbol' : binancecoin_symbol,
        'binancecoin_price' : binancecoin_price,
        'binancecoin_dailychange' : binancecoin_dailychange,
        'tron_symbol' : tron_symbol,
        'tron_price' : tron_price,
        'tron_dailychange' : tron_dailychange,
        'chainlink_symbol' : chainlink_symbol,
        'chainlink_price' : chainlink_price,
        'chainlink_dailychange' : chainlink_dailychange,
        'dogecoin_symbol' : dogecoin_symbol,
        'dogecoin_price' : dogecoin_price,
        'dogecoin_dailychange' : dogecoin_dailychange,

        'bitcoin_tweet_user': str(bitcoin_tweet[0]),
        'bitcoin_tweet' :str(bitcoin_tweet[1]),
        'bitcoin_tweet_link' : str(bitcoin_tweet[2]),
        'litecoin_tweet_user' : str(litecoin_tweet[0]),
        'litecoin_tweet' : str(litecoin_tweet[1]),
        'litecoin_tweet_link' : str(litecoin_tweet[2]),
        'ethereum_tweet_user' : str(ethereum_tweet[0]),      
        'ethereum_tweet' : str(ethereum_tweet[1]),  
        'ethereum_tweet_link' : str(ethereum_tweet[2]), 
        'binancecoin_tweet_user' : str(binancecoin_tweet[0]), 
        'binancecoin_tweet' : str(binancecoin_tweet[1]),
        'binancecoin_tweet_link' : str(binancecoin_tweet[2]),
        'tron_tweet_user' : str(tron_tweet[0]), 
        'tron_tweet' : str(tron_tweet[1]),   
        'tron_tweet_link' : str(tron_tweet[2]),
        'chainlink_tweet_user' : str(chainlink_tweet[0]),     
        'chainlink_tweet' : str(chainlink_tweet[1]),
        'chainlink_tweet_link' : str(chainlink_tweet[2]),
        'dogecoin_tweet_user' : str(dogecoin_tweet[0]),
        'dogecoin_tweet' : str(dogecoin_tweet[1]),
        'dogecoin_tweet_link' : str(dogecoin_tweet[2]),
        
    }

    return Response(api_urls)
