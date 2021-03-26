import {Link} from 'react-router-dom'
export function NotFound() {
  // TODO útfæra 404 síðu
  return (
    <div>
      <h1>Síða fannst ekki</h1>
      <Link to="/">Til baka</Link>
    </div>
    )
}
