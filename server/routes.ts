import {addMeasurement, getMeasurements} from './db';

export function getData( req, res, next ){
    res.send( getMeasurements() );
}

export function putDatum( req, res, next ){
    res.send( addMeasurement( req.body.count || req.params.count ) );
}