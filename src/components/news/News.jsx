import React, { useEffect, useState } from 'react';


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
      { (loading || !data) ? (
        <div class = "news_items">Hleður gögn...</div>
      ) : (
      <div class="news_items">
        {!error ? (<p>Engin villa!</p>) 
        : (<p>Villa við að sækja gögn!</p>)}
        <h2>{data.title}</h2>

        {
          data.items.map((data, i) => {
            if (n > i){
              return (
                <div class="news_item">             
                  <a href={data.link}>{data.title}</a>
                </div>
              )
            }
          })
        }

        { child ? (
          <a href={id} class="guide">Allar Fréttir</a>
        ) : (
          <a href="../" class="guide"> Til Baka</a>
        )}

        <hr/>
      </div>
      )
    }
    </div>
  )
}