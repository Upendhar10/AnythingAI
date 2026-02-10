import dotenv from 'dotenv';
dotenv.config();

import {PORT} from "./config/env.config";
import app from './app';

app.listen(PORT, () => {
    console.log('Server is running at PORT :', PORT);
})