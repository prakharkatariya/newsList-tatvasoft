import React from "react";
import { Form } from "semantic-ui-react";
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = event => { 

    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => { 
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group> 
            <FilledInput
            placeholder="Search topic"
            name="topic"
            value={this.state.searchTopic}
            onChange={this.handleChange}
          /> &nbsp;&nbsp;&nbsp;
            <Button type="submit" variant="contained">Search</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar; 