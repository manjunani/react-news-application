import React, { useState, useEffect } from 'react';

function NewsApi() {
  const [newsData, setNewsData] = useState([]);
  const APIKEY = '54b24c390f4e4d7bb8f6c90f0f9a0dfd';
  const URL = `https://newsapi.org/v2/`;
  const categoriesList = [
    'all',
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  const languagesList = [
    'ar',
    'de',
    'en',
    'es',
    'fr',
    'he',
    'it',
    'nl',
    'no',
    'pt',
    'ru',
    'se',
    'ud',
    'zh',
  ];

  const countryList = [
    'ae',
    'ar',
    'at',
    'au',
    'be',
    'bg',
    'br',
    'ca',
    'ch',
    'cn',
    'co',
    'cu',
    'cz',
    'de',
    'eg',
    'fr',
    'gb',
    'gr',
    'hk',
    'hu',
    'id',
    'ie',
    'il',
    'in',
    'it',
    'jp',
    'kr',
    'lt',
    'lv',
    'ma',
    'mx',
    'my',
    'ng',
    'nl',
    'no',
    'nz',
    'ph',
    'pl',
    'pt',
    'ro',
    'rs',
    'ru',
    'sa',
    'se',
    'sg',
    'si',
    'sk',
    'th',
    'tr',
    'tw',
    'ua',
    'us',
    've',
    'za',
  ];

  const articleTypes = ['everything', 'top-headlines'];

  let ourFetchingUrl = `${URL}${articleTypes[0]}?q=tesla&country=${countryList[10]}&apiKey=${APIKEY}`;

  const getNews = async (url) => {
    const options = { method: 'GET' };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  console.log(getNews(ourFetchingUrl));
  useEffect(() => {
    getNews(ourFetchingUrl).then((data) => {
      setNewsData(data.articles);
    });
  });

  return (
    <div>
      <h1>NewsApi</h1>
      <div>{newsData}</div>
    </div>
  );
}

export default NewsApi;
