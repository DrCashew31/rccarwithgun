makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(21500)
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(200)
    SuperBit.MotorStopAll()
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(21500)
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(300)
    SuperBit.MotorStopAll()
})
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.Keyestudio)
basic.forever(function () {
	
})
