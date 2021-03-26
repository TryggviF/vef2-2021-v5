
// TODO sækja Sass'
import React from 'react';
import './styles.scss';
export function Layout({ children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div>
      <header>FOO</header>
      {React.Children.map(children, child => child)}
      <footer>BAR</footer>
    </div>
  )
}
