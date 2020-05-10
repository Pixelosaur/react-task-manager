class Auth {
    authenticated: boolean = false;

    login(fn: Function): void {
        this.authenticated = true;
        fn();
    }

    logout(fn: Function): void {
        this.authenticated = false;
        fn();
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }
}

export default new Auth();
