import {useState,useEffect} from "react"
import Buttons from "./component/Buttons"
import Header from "./component/Header"
import {formatterCash,calculateTotal} from "./funtions"


function App() {
  
  const [cantidad,setCantidad] = useState(10000);
  const [meses,setMeses] = useState(6);
  const [total,setTotal] = useState(0)
  const [valueMes, setValueMes] = useState(0)

  useEffect(() => {
     setTotal(calculateTotal(cantidad,meses));
     setValueMes(total/meses)

  }, [cantidad,meses,total])
  

  //variables
  const min = 0
  const max = 20000
  const step = 1000

  //funciones

  function handleChange(e){
    setCantidad(+e.target.value)

  }

  function handleMinus(){
    const valor = (cantidad-step)
    if(valor < min){
      alert("Operación no válida")
      return
    }

    setCantidad(valor)
  }

  function handlePlus(){
    const valor = (cantidad+step)
    if(valor > max){
      alert("Operación no válida")
      return
    }


    setCantidad(valor)

  }

  return (
    <div className="my-10 max-w-lg bg-white p-10 shadow mx-auto rounded">
      <Header/>

      <div className="flex justify-between my-6">
        
        <Buttons
          operador="-"
          fn = {handleMinus}

        />
        
        <Buttons
          operador="+"
          fn={handlePlus}
        />
        
      </div>

      <input type="range" 
            min={min}
            max ={max}
            step={step}
            value= {cantidad}
            className="w-full h-6 bg-gray-200 accent-lime-500  hover:accent-lime-300"
            onChange={handleChange}
      
      />
      <p className="text-center my-10 text-indigo-600 text-5xl font-extrabold">{formatterCash(cantidad)}</p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">¡Elige<span className=" text-indigo-600"> la cuota </span> a pagar!</h2>
      <select name="" id="" className="mt-5 w-full p-3 text-center border-gray-300 text-gray-500 rounded-lg font-bold" 
          value={meses}
          onChange ={e => setMeses(+e.target.value)}
  
        >

        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
      <div className="py-8 bg-gray-100 rounded-lg mt-3">
         <h2 className="text-2xl font-extrabold text-gray-500 text-center">Resumen<span className=" text-indigo-600"> de pagos </span></h2>
        <p className="text-xl font-extrabold text-gray-500 text-center mt-2">{meses} Meses</p>
        <p className="text-xl font-extrabold text-gray-500 text-center mt-2"> {formatterCash(total)} total a pagar</p>
        <p className="text-xl font-extrabold text-gray-500 text-center mt-2"> {formatterCash(valueMes)} Mensuales</p>
      </div>
      
    </div>
  )
}

export default App
