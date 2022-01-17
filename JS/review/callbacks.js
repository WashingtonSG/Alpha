function mostraResultado(_result) {
  console.log(_result);
}

function soma(_param1, _param2, _cb) {
  const result = _param1 + _param2;
  const cb = _cb
  if(cb)
    cb(result)
  else {
    const soma = _param1 + _param2;
    console.log(`A soma de ${_param1} + 
    ${_param2} é ${soma}`)
  }

}

soma(1,2, mostraResultado);
soma(1,2)
