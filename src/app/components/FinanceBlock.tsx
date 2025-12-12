import FadeIn from "./FadeIn";

export default function FinanceBlock() {
  return (
    <FadeIn>
      <div className="text-center py-20">
        <h3 className="text-3xl font-semibold mb-6">Modelo Financiero</h3>

        <p className="text-2xl mb-2">ISR Obligatorio: <strong>100%</strong></p>
        <p className="text-2xl mb-2">Aprovechable Art. 34: <strong>X%</strong></p>
        <p className="text-2xl mb-2">Costo Neto: <strong>0</strong></p>
        <p className="text-2xl mb-2">Retorno Cultural: <strong>∞</strong></p>
        <p className="text-2xl">Retorno Comercial: <strong>Medible</strong></p>
      </div>
    </FadeIn>
  );
}
