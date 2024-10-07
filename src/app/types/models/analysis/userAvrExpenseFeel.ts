export default class UserAvrExpenseFeel {
    id?: number;

    constructor(
        public userId: number,
        public expenseFeel: number,
        public value: number
    ) { }
}