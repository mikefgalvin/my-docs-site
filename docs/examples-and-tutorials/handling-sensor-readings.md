# Example: Handling Sensor Readings

```paraflow
task !UploadReadings($first_id, $last_id) {
    update dust_upload(first_id == $first_id, done: 1, upload_time: Now());
    delete dust_upload(last_id < $first_id, done == 1);
    delete dust_reading(id >= $first_id, id <= $last_id);
}

event sensorReading($timestamp string, $lat double, $lon double, $pm10 double, $pm2_5 double, $pm1 double, $ax double, $ay double, $az double) {
    insert dust_reading(created: Now(), sensor_time: $timestamp, $lat, $lon, $pm10, $pm2_5, $pm1, $ax, $ay, $az);
    let $min_id = 1;
    foreach dust_upload($last_id) {
        if $last_id >= $min_id {
            let $min_id = $last_id + 1;
        }
    }
    with dust_reading(id >= $min_id, count(id): $num, min(id): $first_id, max(id): $last_id) {
        if $num >= 3 and not exists !UploadReadings(first_id == $first_id) {
            insert dust_upload($first_id, $last_id);
            !UploadReadings($first_id, $last_id);
        }
    }
}
