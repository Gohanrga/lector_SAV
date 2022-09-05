const { SavFileReader } = require("sav-reader"); // import the commonjs module
async function prueba() {
  // create new sav reader from local file
  const sav = new SavFileReader("pru.sav");

  // this opens the file and loads all metadata (but not the data records)
  await sav.open();

  // print the header, vars, valuelabels, etc.
  // (more info about vars and valuelabels below)
  //console.log(sav.meta);let row = null;
  do {
    row = await sav.readNextRow();
    console.log(row)
    if (row != null) {
      // do something with the row
    }
  } while (row != null);
}
prueba();
