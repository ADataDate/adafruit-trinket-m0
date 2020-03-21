pressure_one = 0
pressure_2 = 0
delta_pressure = 0
inWC = 0
def on_forever():
    pixel.set_color(0x0000ff)
    pause(1000)
    pixel.set_color(0xff0000)
    pause(100)
    bme280.set_address(BME280_I2C_ADDRESS.ADDR_0X76)
    pressure_one = bme280.pressure()
    bme280.set_address(BME280_I2C_ADDRESS.ADDR_0X77)
    pressure_2 = bme280.pressure()
    delta_pressure = pressure_one - pressure_2
    inWC = delta_pressure * 0.0040146307866177
    display.show_number(inWC, 1)
forever(on_forever)