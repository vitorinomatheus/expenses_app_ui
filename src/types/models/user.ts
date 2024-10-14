import BaseModel from "./baseModel";

export default class User extends BaseModel
{
    constructor(
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string
    ) {
        super();
    }
}