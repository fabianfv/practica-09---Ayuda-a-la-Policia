
function letra_dni(nro_dni) {

  const letras_dni = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
 
  const mod_num = 23
  const indice = nro_dni % mod_num
  return letras_dni[indice]
}

const nro_aleatorio = (min, max) => Math.round(Math.random() * max - min)

function dni_aleatorio() {
  let nro_dni = ""

  for (let j = 1; j <= 8; j++)
    nro_dni += nro_aleatorio(0, 9).toString()

  return nro_dni
}

function lista_DNIs() {
  const DNIs = []

  for (let i = 1; i <= 10; i++)
    DNIs.push(dni_aleatorio())

  return DNIs
}

function test() {
  const DNIs = lista_DNIs()
  console.log("Completar los siguientes DNIs con la letra correspondiente:\n")
  console.log(DNIs.join(", ") + "\n")
  console.log(DNIs.map((nro_dni) => nro_dni + letra_dni(nro_dni)).join(", "))
}

test()