const express = require("express");
const app     = express(); 
const PORT    = 3000

app.use(express.json())

app.use("/products", require("./routes/products"));
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
}); 
<<<<<<< HEAD
//hola caracola
=======
>>>>>>> parte_trini
