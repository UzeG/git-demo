export default class Person {
    name: string;
    age: number;
    constructor(name: string = '未知', age: number = 0) {
        this.name = name;
        this.age = age;
    }
}