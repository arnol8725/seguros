using System.Runtime.Serialization;

namespace BAZ.CAP.ConsultaSaldo.ML.DTO
{
    [DataContract]
    public class EntidadSaldo
    {
        [DataMember]
        public string Cu { get; set; }
        [DataMember]
        public string Cuenta { get; set; }
        [DataMember]
        public string TipoCuenta { get; set; }
        [DataMember]
        public string ApellidoP { get; set; }
        [DataMember]
        public string ApellidoM { get; set; }
        [DataMember]
        public string Nombre { get; set; }
        [DataMember]
        public string FechaNac { get; set; }
        [DataMember]
        public string T { get; set; }
    }
}
