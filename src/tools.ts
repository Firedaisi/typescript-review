export class Person{
    //declare property types
    firstName: string;
    lastName: string;
    gender: string;
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;
    constructor(firstName: string, lastName: string, gender: string, height: any = undefined,
    hobbies: string[] = [], birthday: any = undefined, isAlive: boolean = true){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.height = height;
    this.hobbies = hobbies;
    this.birthday = birthday;
    this.isAlive = isAlive;
    }
   };