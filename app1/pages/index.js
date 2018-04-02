import keys from "../keys";
import fetch from "isomorphic-unfetch";
import OneFilm from "../components/oneFilm";

export default class Index extends React.Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    const test = await fetch(`${keys.apiUrl}/api/films`);
    const testJson = await test.json();

    return { data: testJson };
  }

  render() {
    
    const films = this.props.data.results.map(one => 
        <OneFilm key={one.episode_id} data={one} />
    );

    return <div>{films}</div>;
  }
}
