export default class UserAvrExpenseType {
    id?: number;

    constructor(
        public userId: number,
        public expenseType: number,
        public value: number
    ) { }
}