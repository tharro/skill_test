import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UserContainer from '../features/user/container/UserContainer';
import DetailView from '../features/user/container/DetailView';

const RNApp = createStackNavigator(
    {
        User: {
            screen: UserContainer,
            navigationOptions: { headerShown: false }
        },
        Detail: {
            screen: DetailView,
            navigationOptions: { headerShown: false }
        },
    },
    {
        initialRouteName: 'User'
    }
);

export default createAppContainer(RNApp);
