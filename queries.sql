/*Costo de envio segun el carrier(a,b,c)*/
---Carrier A
SELECT (can.caos_cantidad * co.coos_costo) AS 'costo de envio', co.coos_zona AS 'zona', car.caer_nombre AS 'carrier' FROM carrier car, cantidad_envios can, costos co WHERE car.id_caer = co.coos_carrier_id AND co.coos_carrier_id = 1 group BY co.coos_zona;

---Carrier B
SELECT (can.caos_cantidad * co.coos_costo) AS 'costo de envio', co.coos_zona AS 'zona', car.caer_nombre AS 'carrier' FROM carrier car, cantidad_envios can, costos co WHERE car.id_caer = co.coos_carrier_id AND co.coos_carrier_id = 2 group BY co.coos_zona;


---Carrier C
SELECT (can.caos_cantidad * co.coos_costo) AS 'costo de envio', co.coos_zona AS 'zona', car.caer_nombre AS 'carrier' FROM carrier car, cantidad_envios can, costos co WHERE car.id_caer = co.coos_carrier_id AND co.coos_carrier_id = 3 group BY co.coos_zona;