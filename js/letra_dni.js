
function letra_dni(nro_dni) {

  const letras_dni = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
 
  const mod_num = 23
  const indice = nro_dni % mod_num
  return letras_dni[indice]
}

const nro_aleatorio = (min, max) => Math.round(Math.random() * max - min)

