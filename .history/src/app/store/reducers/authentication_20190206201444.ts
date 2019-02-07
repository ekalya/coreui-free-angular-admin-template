

export const AuthenticationReducer = (state: User = null, action: any): IAppState => {
    switch (action.type) {
        case types.AUTHENTICATED_USER:
        return Object.assign({}, state, {
            authenticatedUser: action.user,
            loginTime: new Date()
        });

        case types.LOGGED_OFF_USER:
        return Object.assign({}, state, {
            authenticatedUser: null,
            lastUpdate: new Date()
        });

        default:
          return state;
    }
};