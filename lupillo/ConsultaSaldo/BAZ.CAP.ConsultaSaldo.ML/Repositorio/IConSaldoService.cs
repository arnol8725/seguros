using BAZ.CAP.ConsultaSaldo.ML.DTO;
using System.Collections.Generic;

namespace BAZ.CAP.ConsultaSaldo.ML.Repositorio
{
    interface IConSaldoService
    {
        EntidadSaldo GetNombre(EntidadNombre value);
        
        EntidadSaldo GetCuenta(EntidadCuenta value);
        
        EntidadSaldo GetTarjeta(EntidadTarjeta value);

        List<EntidadSaldo> GetCu(EntidadCu value);
    }
}
