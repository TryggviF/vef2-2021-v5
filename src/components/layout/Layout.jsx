
// TODO sækja Sass'
import React from 'react';
import './styles.scss';
export function Layout({ children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div class="layout">
      <h1>RÚV fréttir</h1>
      {React.Children.map(children, child => child)}
      <footer>
        <p>Fréttir frá</p><a href="http://www.ruv.is">RÚV</a>
      </footer>
    </div>
  )
}
