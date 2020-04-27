class NegotiationList{
  constructor(){
    this._negoatiations = []
  }

  add(negotiation){
    this._negoatiations.push(negotiation);
  }

  get negotiations(){
    return this._negoatiations; 
  }
}