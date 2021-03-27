import React, { useEffect, useState } from 'react';
import { News } from '../news/News.jsx'
const apiUrl = process.env.REACT_APP_API_URL ?? 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/';

// NewsList.propTypes = {
//   type: PropTypes.string.isRequired,
//   articles: PropTypes.arrayOf(PropTypes.string)
// }


export function NewsList() {
  // TODO sækja yfirlit fréttaflokka
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchNews(){
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (e) {
        console.info("villa við að sækja", apiUrl)
        setError(e);
      }
   } fetchNews();
  }, [] )
  

  return (
    <div>
      { (loading) ?(
        <div>Hleður gögn...</div>
      ) : (!error && data) ? (
      <div class="news_container">
        {
          data.map((data, i) => {
            return (
              <div class="news_category" key={i}>             
                <News key={i} href={data.url} n={5} id={data.id} child={true} />
              </div>
            )
        })
        }
      </div>
      ) : (
        <p>Villa við að sækja gögn!</p>
      )
    }
    </div>
  )
}
