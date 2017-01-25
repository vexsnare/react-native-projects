import { text } from 'react-native-communications';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CardSection, Button, Card, Confirm } from './common';
import { employeeCreate, employeeUpdate, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state={ showModal: false };
  componentWillMount() {
    _.each(this.props.employee, (value, key) => {
      this.props.employeeCreate({ key, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeUpdate({ name, phone, shift, uid: this.props.employee.uid });
  }

  onFireButtonPress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;
    text(phone, `Your shift is on ${shift}`);
  }
  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
    this.setState({ showModal: !this.state.showModal });
  }
  onDecline() {
    this.setState({ showModal: false });
  }
  render() {
    console.log(this.props);
    return (
      <Card>
      <EmployeeForm {...this.props} />
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Update Employee
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress={this.onTextButtonPress.bind(this)}>
          Text Schedule
        </Button>
      </CardSection>
      <Confirm
        visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
      >
        Are you sure, you want to fire this employee?
      </Confirm>
      <CardSection>
        <Button onPress={this.onFireButtonPress.bind(this)}>
          Fire Employee
        </Button>
      </CardSection>
    </Card>
    );
  }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate,
                                          employeeUpdate,
                                          employeeDelete })(EmployeeEdit);
