import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry
} from 'react-native';

export default class App extends React.Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.counter} testID="counter">
            {this.state.counter}
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            testID="increment"
            title="Increment"
            onPress={this.increment}
          />
          <Button
            testID="decrement"
            title="Decrement"
            onPress={this.decrement}
          />
        </View>
      </View>
    );
  }
}

const Button = ({ title, testID, style, onPress }) => (
  <TouchableOpacity testID={testID} style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272543',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row'
  },
  button: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#3C56F2',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  counter: {
    fontSize: 80,
    color: '#5FD6D8',
    marginBottom: 60
  }
});

AppRegistry.registerComponent('example', () => App);
