class NegotiationController{
  
  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputAmount = $('#quantidade');
    this._inputValue = $('#valor');

  }
  add(event){
    event.preventDefault();

   let data = new Date(
        ...this._inputData.value
        .split('-')
        .map((item, index) => item - index % 2)
      );
    
      let negotiation = new Negotiation(
        data,
        this._inputAmount.value,
        this._inputValue.value
      );
   
      console.log(negotiation);
      
  }
}