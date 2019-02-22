using BAZ.CAP.ConsultaSaldo.DAL;
using BAZ.CAP.ConsultaSaldo.ML.DTO;
using System;
using System.Collections.Generic;

namespace BAZ.CAP.ConsultaSaldo.BL
{
    public class ConSaldoInterpretacion : IDisposable
    {
        public List<EntidadSaldo> GetCu(EntidadCu value)
        {
            ConsultaSaldoRepositorio instancia = new ConsultaSaldoRepositorio();
            return instancia.GetCu(value);
        }

        public EntidadSaldo GetCuenta(EntidadCuenta value)
        {
            ConsultaSaldoRepositorio instancia = new ConsultaSaldoRepositorio();
            return instancia.GetCuenta(value);
        }

        public EntidadSaldo GetNombre(EntidadNombre value)
        {
            ConsultaSaldoRepositorio instancia = new ConsultaSaldoRepositorio();
            return instancia.GetNombre(value);
        }

        public EntidadSaldo GetTarjeta(EntidadTarjeta value)
        {
            ConsultaSaldoRepositorio instancia = new ConsultaSaldoRepositorio();
            return instancia.GetTarjeta(value);
        }
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
