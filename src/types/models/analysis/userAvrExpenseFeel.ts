import BaseModel from "../baseModel";

export default class UserAvrExpenseFeel extends BaseModel {

    constructor(
        public userId: number,
        public expenseFeel: number,
        public value: number
    ) {
        super();
    }
}