class NegotiationsView{

  constructor(element){
    this._element = element;
  }

  _template(model){
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>
    
      <tbody>
        ${model.negotiations.map((n)=>{
          return `
                  <tr>
                    <td>${DateHelper.dataToText(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                  </tr>
                `
        }).join('')}
      </tbody>
      <tfoot>
        <td colspan="3"></td>
        <td>
          ${model.negotiations.reduce((total,n) =>total+n.volume,0)}
        </td>
      </tfoot>
    </table> 
    `;
  }

  update(model){
    this._element.innerHTML = this._template(model);
  }
}