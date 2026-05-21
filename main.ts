input.onButtonPressed(Button.A, function () {
    angledeg = input.rotation(Rotation.Pitch)
    basic.showNumber(angledeg)
})
input.onButtonPressed(Button.AB, function () {
    az_mg = input.acceleration(Dimension.Z)
    az = az_mg * 0.0098
    Wz_N = mass_kg * az
    basic.showString("W(z)" + Wz_N + "N")
})
input.onButtonPressed(Button.B, function () {
    ay_mg = input.acceleration(Dimension.Y)
    ay = ay_mg * 0.0098
    Wy_N = mass_kg * ay
    basic.showString("W(y)" + Wy_N + "N")
})
let Wy_N = 0
let ay = 0
let ay_mg = 0
let Wz_N = 0
let az = 0
let az_mg = 0
let angledeg = 0
let mass_kg = 0
mass_kg = 0.47
