import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDesc() {
     if (this.props.expanded) {
      return (
        <CardSection>
          <Text>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
      <View>
        <CardSection>
          <Text style={titleStyle}>
            {this.props.library.title}
          </Text>
        </CardSection>
        {this.renderDesc()}
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    paddingLeft: 10,
    fontSize: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.library.id === state.selectedLibraryId;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
