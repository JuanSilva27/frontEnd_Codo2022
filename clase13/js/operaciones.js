let Nombre = "Juan"
saludar= () => {
    alert(`Hola ${Nombre}`)
}

window.addEventListener("load",()=>{
    const $ = (algo =>{
        return document.getElementById(algo)
    })

    let op1 = $("Op1")
    let op2 = $("Op2")

    Sumar=()=>{
      alert(parseInt(op1.value)+parseInt(op2.value))
    }
})