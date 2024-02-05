//Se utiliza para iniciar el back y arrancar todo.
import app from './app.js';
import {connectDB} from './db.js';

connectDB();
app.listen(3000);
console.log(`object`, 3000);

