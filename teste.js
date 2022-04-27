import { calculadorabhaskara } from "./bhaskara"


it('Caucula delta (B* - 4xAxC)',() => {
    expect(calculadorabhaskara(2,8,-24)).toBe(256)
})

it('Calcula de x1 (-B + Raiz de Delta / 2.A)' , () => {
    expect(calcularx(1,12,delta)).toBe(1)
})