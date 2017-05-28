import Student from './Student';

//继承Student
export default class MingStudent extends Student {
    //重写父类构造方法
    constructor(){
      //调用父类构造方法，完成初始化
      super('小明','男',22);
    }

    //重写方法
    getDescription(){
      return '继承对象:' + super.getDescription(); //调用父类的getDescription()
    }
}
