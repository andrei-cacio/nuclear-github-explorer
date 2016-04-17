export const API = {
    GITHUB: {
        auth: 'https://api.github.com/user',
        repos: (user) => 'https://api.github.com/users/${user}/repos'
    }
};