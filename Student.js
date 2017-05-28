
export default class Student{

  //初始化类的属性
  constructor(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
  }

  //定义方法，输出类的属性
  getDescription(){
    return '姓名:' +this.name  + ' 性别:' + this.sex + ' 年龄'+this.age;
  }
  
}
