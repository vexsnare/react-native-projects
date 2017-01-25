import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import { CardSection, Input } from './common';


import { employeeCreate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Mazor"
            value={this.props.name}
            onChangeText={value => this.props.employeeCreate({ key: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="9999999999"
            value={this.props.phone}
            onChangeText={value => this.props.employeeCreate({ key: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerDayStyle}>
            Shift
          </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeCreate({ key: 'shift', value })}
          >
           <Picker.Item label="Monday" value="Monday" />
           <Picker.Item label="Tuesday" value="Tuesday" />
           <Picker.Item label="Wednesday" value="Wednesday" />
           <Picker.Item label="Thursday" value="Thursday" />
           <Picker.Item label="Friday" value="Friday" />
           <Picker.Item label="Saturday" value="Saturday" />
           <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}
const styles = {
    pickerDayStyle: {
      fontSize: 18,
      paddingLeft: 10
    }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeForm);
