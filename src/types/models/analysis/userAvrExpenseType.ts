import BaseModel from "../baseModel";

export default class UserAvrExpenseType extends BaseModel {

    constructor(
        public userId: number,
        public expenseType: number,
        public value: number
    ) {
        super();
    }
}