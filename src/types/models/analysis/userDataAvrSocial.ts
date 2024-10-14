import BaseModel from "../baseModel";

export default class UserAvrSocial extends BaseModel{

    constructor(
        public userId: number,
        public socialType: number,
        public value: number
    ) {
        super();
    }
}