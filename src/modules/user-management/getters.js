export const isTalkingToServer = [
    ['user', 'status'],
    status => status.get('isTalkingToServer')
];

export const authFailedReason = [
    ['user', 'status'],
    status => status.get('reason')
];