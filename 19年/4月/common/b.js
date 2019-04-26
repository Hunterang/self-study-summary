const b = {
  get body() {
    console.log(this+'halo');
  }
}
module.exports = b
console.log(b.body);
