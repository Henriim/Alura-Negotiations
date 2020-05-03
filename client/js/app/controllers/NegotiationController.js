
class NegotiationController{
  
  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputAmount = $('#quantidade');
    this._inputValue = $('#valor');
    this._negotiationList = new NegotiationList();
    this._negotiationsView = new NegotiationsView($('#negotiationView'));

    this._negotiationsView.update(this._negotiationList);
  }

  add(event){
      event.preventDefault();
      this._negotiationList.add(this._addNegotiation());
      this._negotiationsView.update(this._negotiationList);
      this._cleanForm();
  }

  _addNegotiation(){
    return new Negotiation(
      DateHelper.textToDate(this._inputData.value),
       this._inputAmount.value,
       this._inputValue.value); 
  }

  _cleanForm(){
    this._inputData.value = "";
    this._inputAmount.value = 1;
    this._inputValue.value = 0.0;

    this._inputData.focus();
  }
}