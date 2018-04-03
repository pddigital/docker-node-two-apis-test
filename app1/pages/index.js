import keys from "../keys";
import fetch from "isomorphic-unfetch";
import OneFilm from "../components/oneFilm";

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const test = await fetch(
      `${keys.apiUrl}/api/films`
    );

    const testJson = await test.json();

    return { data: testJson };
  }

  render() {
    const films = this.props.data.results.map(one => (
      <OneFilm key={one.episode_id} data={one} />
    ));

    return (
      <div>
        <h1>Star Wars Movies</h1>
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
