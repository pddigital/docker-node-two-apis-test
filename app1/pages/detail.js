import keys from "../keys";
import fetch from "isomorphic-unfetch";
import {Link} from '../routes';

export default class Detail extends React.Component {
  static async getInitialProps({ req, query }) {
    const test = await fetch(`${req ? keys.apiServerUrl : keys.apiClientUrl}/api/films/one/${query.id}`);
    const testJson = await test.json();

    return { data: testJson };
  }

  render() {
    
    return <div>
      <h1>{this.props.data.title}</h1>
      <p>{this.props.data.opening_crawl}</p>
      <p>Directed By: {this.props.data.director}</p>

      <p><Link route="/"><a>{`<<`} BACK</a></Link></p>
    </div>
  }
}