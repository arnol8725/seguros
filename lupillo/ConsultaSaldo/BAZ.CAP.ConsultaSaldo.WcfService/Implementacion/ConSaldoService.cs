using BAZ.CAP.ConsultaSaldo.BL;
using BAZ.CAP.ConsultaSaldo.ML.DTO;
using BAZ.CAP.ConsultaSaldo.WcfService.Contrato;
using System.Collections.Generic;

namespace BAZ.CAP.ConsultaSaldo.WcfService.Implementacion
{
    public class ConSaldoService : IConSaldoService
    {
        public List<EntidadSaldo> GetCu(EntidadCu value)
        {
            using (ConSaldoInterpretacion instancia = new ConSaldoInterpretacion())
            {
                return instancia.GetCu(value);
            }
        }

        public EntidadSaldo GetCuenta(EntidadCuenta value)
        {
            using (ConSaldoInterpretacion instancia = new ConSaldoInterpretacion())
            {
                return instancia.GetCuenta(value);
            }
        }

        public EntidadSaldo GetNombre(EntidadNombre value)
        {
            using (ConSaldoInterpretacion instancia = new ConSaldoInterpretacion())
            {
                return instancia.GetNombre(value);
            }
        }

        public EntidadSaldo GetTarjeta(EntidadTarjeta value)
        {
            using (ConSaldoInterpretacion instancia = new ConSaldoInterpretacion())
            {
                return instancia.GetTarjeta(value);
            }
        }
    }

}