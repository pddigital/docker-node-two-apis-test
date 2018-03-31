import keys from "../keys";
import fetch from "isomorphic-unfetch";

export default class Index extends React.Component {
    static async getInitialProps({ store, isServer, pathname, query }) {
        const test = await fetch(`${keys.apiUrl}/api/test`);
        const testJson = await test.json();

        return { data: testJson };
      }


    render() {
        console.log(this.props.data)
        return (
            <div>
            <h1>THIS IS A TEST 10.</h1>
        </div>
        );
    }
}