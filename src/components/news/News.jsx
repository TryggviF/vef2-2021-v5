import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ href, n, id, child}) {
  // TODO sækja fréttir fyrir flokk
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchNews(){
      try {
        const res = await fetch(href);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
   } fetchNews();
  }, [href] )
  return (
    <div>
      { (loading || !data) ?(
        <div class = "news_container">Hleður gögn...</div>
      ) : (
      <div class="news_container">
        
        <p>{data.title}</p>
        {
          data.items.map((data, i) => {
            if (n > i){
              console.log(data.title, 'i is', i);
            return (
              <div class="news_category">             
                <p>{data.title}</p>
              </div>
            )
          }
        })
        }
        {child ? (
          <a href={id}>Allar Fréttir</a>
        ) : (
          <a href="../"> Til Baka</a>
        )}
        <hr/>
      </div>
      )
    }
    </div>
  )
}