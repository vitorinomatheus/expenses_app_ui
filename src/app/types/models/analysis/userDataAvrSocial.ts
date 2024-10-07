export default class UserAvrSocial {
    id?: number;

    constructor(
        public userId: number,
        public socialType: number,
        public value: number
    ) { }
}