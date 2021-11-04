import React, {Component} from "react";
import "./App.css";
import { ToastContainer} from 'react-toastify';
import http from "./services/httpService";
import config from "./config.json";
import 'react-toastify/dist/ReactToastify.css';
import * as Sentry from "@sentry/react";

class App extends Component {
  state = {
    posts: []
  };

  handleAdd = async () => {
    try{
      const obj = {title:"a", body:"b"};
      const {data: post} = await http.post(config.apiEndpoint, obj);
      console.log(post)
      const posts = [post, ...this.state.posts];
      this.setState({posts: posts});
    } catch (error) {
      console.log(`something wrong ${error}`);
    }
  };

  handleUpdate = async post => {
    console.log(post)

    post.title = "Updated";
    await http.put(config.apiEndpoint + "/" + post.id, post );

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post}
    // http.patch(config.apiEndpoint + "/" + post.id, {title: post.title});
    console.log("Update", post);
    this.setState({posts: posts});
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({posts: posts});

    try {
      const theLink = config.apiEndpoint + "/" + post.id
      await http.delete(theLink);

    } catch (error) {
      //error have two properties: request, response. for exmaple: error.request, error.response
      // Expected Error : Errors that api endpoint predict and return. Example: (404: not found, 400: bad request) 400 range = Client Errors
      // For Expected Error > Display a specific error message
      if (error.response && error.response.status === 404) {
        alert('This post has already been deleted');
      }
      this.setState({posts:originalPosts});
    }
  };


  async componentDidMount() {
    // pending > resolved (success) OR rejected (failure)
    const {data: posts} = await http.get(config.apiEndpoint);
    this.setState({posts: posts})
  }


  render() {
    return (
        <React.Fragment>
          <ToastContainer/>
          <button type="button"
                  onClick={() => {
                    throw Error("test kaka");
                  }}>
            Break the world
          </button>;
          <button className="btn btn-primary" onClick={this.handleAdd}>
            Add
          </button>
          <table className="table">
            <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {this.state.posts.map(post => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <button
                        className="btn btn-info btn-sm"
                        onClick={() => this.handleUpdate(post)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(post)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </React.Fragment>
    );
  }
}

export default Sentry.withProfiler(App);
