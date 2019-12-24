// import external modules
import React, { Component } from "react";
import { Row, Col, Button, Card, CardHeader, CardBody } from "reactstrap";
import swal from "sweetalert";

class SweetAlerts extends Component {
  constructor(props) {
    super(props);
    this.sowlBasic = this.sowlBasic.bind(this);
    this.sowlSuccess = this.sowlSuccess.bind(this);
    this.sowlWarning = this.sowlWarning.bind(this);
    this.sowlError = this.sowlError.bind(this);
    this.sowlInfo = this.sowlInfo.bind(this);
    this.sowlOptions = this.sowlOptions.bind(this);
    this.sowlPrompt = this.sowlPrompt.bind(this);
    this.sowlAjax = this.sowlAjax.bind(this);
  }

  sowlBasic() {
    swal("Hello world!");
  }
  sowlSuccess() {
    swal("Good job!", "You clicked the button!", "success");
  }
  sowlWarning() {
    swal("Good job!", "You clicked the button!", "warning");
  }
  sowlError() {
    swal("Good job!", "You clicked the button!", "error");
  }
  sowlInfo() {
    swal("Good job!", "You clicked the button!", "info");
  }
  sowlOptions() {
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success"
        });
      } else {
        swal("Your imaginary file is safe!", {
          icon: "error"
        });
      }
    });
  }
  sowlPrompt() {
    swal("Write something here:", {
      content: "input"
    }).then(value => {
      swal(`You typed: ${value}`);
    });
  }
  sowlAjax() {
    swal({
      text: 'Search for a movie. e.g. "La La Land".',
      content: "input",
      button: {
        text: "Search!",
        closeModal: false
      }
    })
      .then(name => {
        if (!name) throw new Error();
        return fetch(
          `https://itunes.apple.com/search?term=${name}&entity=movie`
        );
      })
      .then(results => {
        return results.json();
      })
      .then(json => {
        const movie = json.results[0];
        if (!movie) {
          return swal("No movie was found!");
        }
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
        swal({
          title: "Top result:",
          text: name,
          icon: imageURL
        });
      })
      .catch(err => {
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
  }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h5>Alerts</h5>
            </CardHeader>
            <CardBody>
              <Button onClick={this.sowlBasic} color="primary">
                Basic
              </Button>
              <Button onClick={this.sowlSuccess} color="success">
                Success
              </Button>
              <Button onClick={this.sowlWarning} color="warning">
                Warning
              </Button>
              <Button onClick={this.sowlError} color="danger">
                Error
              </Button>
              <Button onClick={this.sowlInfo} color="info">
                Info
              </Button>
              <Button onClick={this.sowlOptions} color="primary">
                Success or Cancel
              </Button>
              <Button onClick={this.sowlPrompt} color="primary">
                Prompt
              </Button>
              <Button onClick={this.sowlAjax} color="primary">
                Ajax
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SweetAlerts;
