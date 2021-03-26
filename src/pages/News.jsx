import { useParams } from "react-router"
import { News } from '../components/news/News.jsx'

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsPage() {
  // TODO útfæra fréttasíðu
  const id = useParams();
  const url = apiUrl + id.id;
  console.log('id: ', id);
  console.log('url:', url);
  return (
    <News href={url} n={19} child={false} id={id}/>
  )
}