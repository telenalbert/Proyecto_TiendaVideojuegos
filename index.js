const express = require("express");
const app     = express(); 
const PORT    = 3000

app.use(express.json())

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
}); 
//hola caracola
console.log("prueba bea");