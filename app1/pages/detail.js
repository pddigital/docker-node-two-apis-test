import keys from "../keys";
import fetch from "isomorphic-unfetch";

export default class Detail extends React.Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    const test = await fetch(`${keys.apiUrl}/api/films/one/${query.id}`);
    const testJson = await test.json();

    return { data: testJson };
  }

  render() {
    
    console.log(this.props.data)

    return <div>test detail page</div>;
  }
}