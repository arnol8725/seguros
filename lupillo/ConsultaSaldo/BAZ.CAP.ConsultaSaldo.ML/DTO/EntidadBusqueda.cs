using System.Runtime.Serialization;

namespace BAZ.CAP.ConsultaSaldo.ML.DTO
{
    [DataContract]
    public class EntidadNombre
    {
        [DataMember]
        public string Nombre { get; set; }
        [DataMember]
        public string ApellidoP { get; set; }
        [DataMember]
        public string ApellidoM { get; set; }
    }

    [DataContract]
    public class EntidadTarjeta
    {
        [DataMember]
        public string Tarjeta { get; set; }
    }

    [DataContract]
    public class EntidadCuenta
    {
        [DataMember]
        public string Cuenta { get; set; }
    }
    [DataContract]
    public class EntidadCu
    {
        [DataMember]
        public string Pais { get; set; }
        [DataMember]
        public string Canal { get; set; }
        [DataMember]
        public string Sucursal { get; set; }
        [DataMember]
        public string Cons { get; set; }
    }
}
