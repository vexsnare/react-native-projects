import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            placeholder="email@gmail.com"
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.password}
            placeholder="password"
            label="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'blue'
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
