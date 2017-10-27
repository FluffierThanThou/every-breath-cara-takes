const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
import * as moment from 'moment'

const adapter = new FileSync('../db/db.json', {
  defaultValue: { measurements: [] }
})
const db = low(adapter)
const DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ";

export function addMeasurement( measurement ): any {
  return db.get('measurements')
    .push( { x: moment().locale("en").format(DATE_RFC2822), y: measurement } )
    .write()
}

export function getMeasurements(): any[] {
  return db.get('measurements')
    .value()
}