import { useParams } from "react-router"
import { News } from '../components/news/News.jsx'
import { NotFound } from "./NotFound.jsx";

const apiUrl = process.env.REACT_APP_API_URL;
const validID = [
  'allar',
  'innlent',
  'erlent',
  'menning',
  'ithrottir',
]

export function NewsPage() {
  // TODO útfæra fréttasíðu
  const id = useParams();
  const valid = validID.includes(id.id);
  if(!valid) {
    return (
      <NotFound/>
    )
  }
  const url = apiUrl + id.id;
  console.log('id: ', id);
  console.log('url:', url);
  return (
    <div>
      <News href={url} n={Infinity} child={false} id={id}/>
    </div>
  )
}