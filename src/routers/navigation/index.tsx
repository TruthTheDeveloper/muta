import {NavigationContainer} from '@react-navigation/native';
import {HomeMenu, InfoSvg, LearnMenu, LiveMenu} from '../../assets/svg';
import AppHeader from '../../reusables/app-header';
import AppTabButton from '../../reusables/app-tab-button';
import {
  Onboarding,
  PickLearn,
  Proficiency,
  SelectLanguage,
  SignUp,
  SignUpFields,
  Learn,
  Live,
  Home,
  Login,
  LoginField,
} from '../../screens';
import {routes} from '../router-constants/routes';
import {Stack, Tab} from '../router-constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ApplicationProviderScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#4CA6A8',
        tabBarStyle: {
          backgroundColor: '#1B1E26',
          borderWidth: 0,

          height: 70,
        },
        // tabBarStyle: {
        //   position: 'absolute',
        //   paddingBottom: 16,
        //   paddingLeft: 16,
        //   paddingRight: 16,
        //   height: 86,
        // },
      }}>
      <Tab.Screen
        name={routes.Home}
        component={Home}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              icon={<HomeMenu height={20} width={20} fill={color} />}
              color={color}
              isFocused={focused}
              name="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.Learn}
        component={Learn}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              icon={<LearnMenu height={20} width={20} fill={color} />}
              color={color}
              isFocused={focused}
              name="Learn"
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.Live}
        component={Live}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AppTabButton
              icon={<LiveMenu height={20} width={20} fill={color} />}
              color={color}
              isFocused={focused}
              name="Live"
            />
          ),
        }}
      />
      {/* <Stack.Screen name={StackScreen} component={StackScreens} /> */}
    </Tab.Navigator>
  );
};

const AuthenticationProviderScreens = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name={routes.Onboarding}
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.SignUpFields}
        component={SignUpFields}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={routes.SignUp}
        component={SignUp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={routes.SelectLanguage}
        component={SelectLanguage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={routes.LoginField}
        component={LoginField}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={routes.Login}
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={routes.Proficiency}
        component={Proficiency}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.PickLearn}
        component={PickLearn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function NavigationProvider() {
  const {seenAuser} = useSelector((state: RootState) => state.authReducer);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {seenAuser ? (
          <Stack.Screen
            name={routes.ApplicationProvider}
            component={ApplicationProviderScreens}
          />
        ) : (
          <Stack.Screen
            name={routes.AuthenticationProvider}         
            component={AuthenticationProviderScreens}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationProvider;
