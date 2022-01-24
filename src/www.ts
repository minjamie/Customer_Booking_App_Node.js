import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is listening In ${PORT}`);
});
