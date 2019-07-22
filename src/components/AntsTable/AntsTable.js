import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";

import TableHeaders from "../TableHeaders";
import AntRow from "../AntRow";
import BigButton from "../../components/BigButton";

class AntsTable extends Component {
  constructor(props) {
    super();

    const { ants } = props;
    this.state = { ants };
  }

  onCalculationFinished = (name, odds) => {
    const newAnts = this.state.ants
      .map(ant => {
        if (ant.name === name) {
          return { ...ant, odds };
        }
        return ant;
      })
      .sort((a, b) => {
        const aUndefined = a.odds == null;
        const bUndefined = b.odds == null;
        if (aUndefined || bUndefined) {
          if (aUndefined && bUndefined) {
            return 0;
          } else if (aUndefined) {
            return 1;
          } else {
            return -1;
          }
        }

        return b.odds - a.odds;
      });
    this.setState({ ants: newAnts });
  };

  render() {
    const { ants } = this.state;
    return (
      <Fragment>
        <TableHeaders />
        {ants.map(ant => (
          <AntRow
            key={ant.name}
            ant={ant}
            onCalculationFinished={this.onCalculationFinished}
          />
        ))}
        <BigButton label="RECALCULATE" />
      </Fragment>
    );
  }
}

export default AntsTable;
