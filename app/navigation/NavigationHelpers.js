/*
 * Actions related with navigation
 * Every navigation action should be defined here
 * Avoid using this.props.navigation inside the code
 */
import NavigationService from './NavigationService';

export function navigateToScreen(screen, params) {
    NavigationService.navigate(screen, {item: params});
}

export function navigateGoBack() {
    NavigationService.goBack(null);
}

