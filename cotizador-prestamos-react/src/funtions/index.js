function formatterCash(value){
  const formatter = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency :"USD"
  })

  return formatter.format(value)
}

function calculateTotal(cantidad,meses){
  let total;

  // menos cantidad de dinero mas porcentaje
  if(cantidad <5000){
    total = cantidad * 1.5
  }else if(cantidad >=5000 && cantidad > 10000){
    total = cantidad * 1.4
  }else if(cantidad >=10000 && cantidad > 15000){
    total = cantidad * 1.3
  }else{
    total = cantidad * 1.2
  }

  // más meses mayor porcentaje
  if(meses ===6){
    total *= 1.1
  }else if(meses === 12){
    total *= 1.2
  }else{
    total *= 1.3
  }

 return total
}
export{
  formatterCash,
  calculateTotal
} 