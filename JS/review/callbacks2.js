function soma(_param1, _param2, _cb) {
  const result = _param1 + _param2;
  const cb = _cb;

  if (cb)
    cb(_param1, _param2, result)
  else
    console.log('Need to specify a callback function!');
}

soma(3, 4, function podeSerQualquerNome(param1, param2, res) {
  console.log(`param1: ${param1} - param2 ${param2} - 
  result: ${res}`)
});

soma(5,6, (_a, _b, _c ) => console.log(`Result:${_c}`) )