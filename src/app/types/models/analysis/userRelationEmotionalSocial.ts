export default class UserRelationEmotionalSocial {
    id?: number;

    constructor(
        public userId: number,
        public socialType: number,
        public emotionalType: number,
        public value: number
    ) { }
}