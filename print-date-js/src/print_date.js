class PrintDate {
    formCurrentDate() {
        return console.log(new Date());
    }
    printCurrentDate() {
        fecha = new Date();
        formFecha = fecha.toISOString();
        console.log(formFecha);
        return fecha;
  }
}

module.exports.PrintDate = PrintDate;
