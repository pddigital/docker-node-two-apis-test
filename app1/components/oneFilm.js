import {Link} from '../routes';

export default ({data}) => (
  <div>
    <p><Link route={`/detail/${data.episode_id}`}><a>{data.title}</a></Link></p>
  </div>
);