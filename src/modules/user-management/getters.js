export const isTalkingToServer = [
    ['user', 'status'],
    status => status.get('isTalkingToServer')
];

export const authFailedReason = [
    ['user', 'status'],
    status => status.get('reason')
];

export const isLoggedIn = [
    ['user', 'status'],
    status => status.get('isLoggedIn')
];

export const userInfo = [
    ['user', 'info'],
    info => {
        return {
            name: info.get('name'),
            avatar: info.get('avatar_url'),
            username: info.get('login')
        }
    }
];