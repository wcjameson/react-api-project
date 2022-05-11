import React from "react";
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    // We deconstruct the mapped Redux properties from this.props.
    const { error, isLoading, animals } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Animals</h1>

          <ul>
            {animals.map((animal, index) =>
              
              <Card key={index}>
                <h3>{animal.name}</h3>
                <p>{animal.species}</p>
                </Card>

            )}
          </ul>

        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Animals);