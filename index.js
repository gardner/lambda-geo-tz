var geoTz = require('geo-tz')

module.exports.handler = (event, context, cb) => {
  var name = geoTz.tz(event.lat, event.lon)
  cb(null, JSON.stringify({ timezone: name }))
}
