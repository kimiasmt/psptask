interface User {
    id: number,
    role: 'admin' | 'employee'
}

export const USER_EXAMPLE : User = {
    id: 1,
    role : 'employee'
}