function a() {
  c()
  function c() {
    console.log(b);
  }
}
a();
const b = 10 ;