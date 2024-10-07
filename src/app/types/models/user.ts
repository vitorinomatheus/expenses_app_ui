export default class User
{
    id?: number;

    constructor(
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string
    ) { }
}