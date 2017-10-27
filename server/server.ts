import * as express from 'express';
import * as bodyParser from 'body-parser';
import {getData, putDatum} from './routes';

const app = express()
app.use( express.static( 'public' ) );
app.use( bodyParser.json() );

app.get( "/data", getData );
app.post( "/data", putDatum );
app.get( "/data/:count", putDatum );

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})