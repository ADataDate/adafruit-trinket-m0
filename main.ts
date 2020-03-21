let pressure_one = 0
let pressure_2 = 0
let delta_pressure = 0
let inWC = 0
forever(function () {
    pixel.setColor(0x0000ff)
    pause(1000)
    pixel.setColor(0xff0000)
    pause(100)
    bme280.setAddress(BME280_I2C_ADDRESS.ADDR_0x76)
    pressure_one = bme280.pressure()
    bme280.setAddress(BME280_I2C_ADDRESS.ADDR_0x77)
    pressure_2 = bme280.pressure()
    delta_pressure = pressure_one - pressure_2
    inWC = delta_pressure * 0.0040146307866177
    display.showNumber(inWC, 1)
})
