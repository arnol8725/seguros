using BAZ.CAP.ConsultaSaldo.ML.DTO;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace BAZ.CAP.ConsultaSaldo.WcfService.Contrato
{
    [ServiceContract]
    interface IConSaldoService
    {
        [OperationContract]
        [WebInvoke(RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, Method = "POST", BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        EntidadSaldo GetNombre(EntidadNombre value);

        [OperationContract]
        [WebInvoke(RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, Method = "POST", BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        EntidadSaldo GetCuenta(EntidadCuenta value);

        [OperationContract]
        [WebInvoke(RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, Method = "POST", BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        EntidadSaldo GetTarjeta(EntidadTarjeta value);

        [OperationContract]
        [WebInvoke(RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, Method = "POST", BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        List<EntidadSaldo> GetCu(EntidadCu value);
    }
}
