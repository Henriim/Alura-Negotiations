
class NegotiationController{
  
  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputAmount = $('#quantidade');
    this._inputValue = $('#valor');

  }
  add(event){
    event.preventDefault();
   
      let negotiation = new Negotiation(
       DateHelper.textToDate(this._inputData.value),
        this._inputAmount.value,
        this._inputValue.value
      );
      
      console.log(DateHelper.dataToText(negotiation.data));
      
  }
}