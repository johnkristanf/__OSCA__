export type User = {
    name: string;
    username: string;
    email: string;
    role: 'USER' | 'ADMIN'; // Add the role property
}