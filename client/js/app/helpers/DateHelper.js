class DateHelper{

  constructor(){
    throw new Error('This class cannot be instantiated')
  }

  static dataToText(data){
    return  `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

  static textToDate(text){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(text)){
      throw new Error("That format is not correct. Correct format: yyyy-mm-dd");
    }
    return  new Date(...text.split('-').map((item, index) => item - index % 2));
  }
}