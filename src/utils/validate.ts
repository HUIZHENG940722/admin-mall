export function validateUsername(username: string):boolean {
    return username.trim().length >= 3;
}

export function validatePassword(password: string): boolean {
    return password.trim().length >= 3;
}