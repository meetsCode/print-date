class PrintDate {
    formCurrentDate() {
        return console.log(new Date());
    }
    printCurrentDate() {
        fecha = new Date();
        console.log(fecha) ;
        return fecha;
  }
}

module.exports.PrintDate = PrintDate;
