import { func } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'


export function News({ href, n, id, child }) {
  // TODO sækja fréttir fyrir flokk
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  function handleClick(){
    history.push('/');
  }
  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(href);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (e) {
        setError(true);
        console.log("Það kom villa við að sækja ", href, "!")
      }
    } fetchNews();
  }, [href])
  return (
    <div>
      { (loading) ? (
        <div class="news_items">Hleður gögn...</div>
      ) : (!error && data) ? (
        <div class={ child ? "news_items" : "news_items no_child"}>
          <h2>{data.title}</h2>

          {
            data.items.map((data, i) => {
              if (n > i) {
                return (
                  <div key={i} class="news_item">
                    <a href={data.link}>{data.title}</a>
                  </div>
                )
              }
            })
          }

          { child ? (
            // <a href={id} class="guide">Allar Fréttir</a>
            <Link to={id} replace class="guide" onClick={handleClick}>Allar fréttir</Link>
          ) : (
            // <a href="../" class="guide"> Til Baka</a>
            <Link to="../" replace class="guide">Til Baka</Link>
          )}

        </div>
      ) : (
        <p>Villa við að sækja gögn!</p>
      )
      }
    </div>
  )
}