import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, Button, Card } from './common';
import { employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    console.log(this.props);
    return (
      <Card>
      <EmployeeForm {...this.props} />
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Create
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

export default connect(mapStateToProps, { employeeSave })(EmployeeCreate);
