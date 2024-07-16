import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Kích thước màn hình
const { width, height } = Dimensions.get('window');

// Màn hình Onboarding
const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/1st.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Image
          source={require('./assets/carrot.png')}
          style={styles.carrotIcon}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome </Text>
          <Text style={styles.title}>to our store</Text>
        </View>
        <Text style={styles.subtext}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const IconButton = ({ name, text, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.iconButton, { backgroundColor }]}>
      <Icon name={name} size={20} color="white" style={styles.iconLeft} />
      <Text style={styles.iconButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

// Màn hình SignIn
const SignInScreen = () => {
  return (
    <View style={styles.signInContainer}>
      <Image
        source={require('./assets/2nd.png')}
        style={styles.signInImage}
      />
      <View style={styles.signInTitleContainer}>
        <Text style={styles.signInTitle}>Get your groceries with nectar</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('./assets/orc.png')} style={styles.phoneIcon} />
        <Text style={styles.phoneText}>+880</Text>
      </View>
      <Text style={styles.socialText}>Or connect with social media</Text>
      <IconButton name="google" text="Continue with Google" backgroundColor="#4B70F5" />
      <IconButton name="facebook" text="Continue with Facebook" backgroundColor="#3B5998" />
    </View>
  );
};

// Cấu hình điều hướng
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrotIcon: {
    width: 50,
    height: 60,
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 45,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtext: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#53B175',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  iconLeft: {
    marginRight: 10,
  },
  iconButtonText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  signInImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  signInTitleContainer: {
    marginBottom: 20,
  },
  signInTitle: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 24,
    color: '#030303',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#828282',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  phoneIcon: {
    width: 24,
    height: 24,
    tintColor: 'red',
    marginRight: 10,
  },
  phoneText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#030303',
  },
  socialText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#828282',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
