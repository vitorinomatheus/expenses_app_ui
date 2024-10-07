export default class UserAvrEmotional {
    id?: number;

    constructor(
        public userId: number,
        public emotionType: number,
        public value: number
    ) { }
}