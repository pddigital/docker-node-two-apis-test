import keys from "../keys";
import fetch from "isomorphic-unfetch";
import OneFilm from "../components/oneFilm";

export default class Index extends React.Component {
  static async getInitialProps({ req, query }) {
    const test = await fetch(`${req ? keys.apiUrlServer : keys.apiUrlClient}/api/films`);

    const testJson = await test.json();

    return { data: testJson };
  }

  render() {
    const films = this.props.data.results.map(one => (
      <OneFilm key={one.episode_id} data={one} />
    ));

    return (
      <div>
        <h1>Star Wars Movies 3</h1>
        {films}
        <style jsx global>
        {
          `
          
          
          `
        }
        </style>
        <style jsx>{`
        
        
        `}</style>
      </div>
    );
  }
}
