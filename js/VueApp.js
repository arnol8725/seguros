Vue.component('common-list',{//se debería de poner en un archivo
    props    : ['lista'],
    template: `<div class="scroll">
                    <table class="tblGeneral tblSaldo">
                        <thead>
                            <tr>
                                <th>Cliente Único</th>
                                <th>Cuenta</th>
                                <th>Tipo de Cuenta</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Nombre</th>
                                <th>Fecha Nacimiento</th>
                                <th>T*</th>
                            </tr>
                        </thead>
                        <tbody>                    
                            <tr v-for="item in lista">
                                <td> {{item.Cu}} </td>
                                <td> {{item.Cuenta}} </td>
                                <td><img :src="item.TipoCuenta" /></td>
                                <td> {{item.ApellidoP}} </td>
                                <td> {{item.ApellidoM}} </td>
                                <td> {{item.Nombre}} </td>
                                <td> {{item.FechaNac}} </td>
                                <td> {{item.T}} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>`,
});

var v = new Vue({
    el: "#app",
    data: {//datos generales manipulación con razor
        myApp: "Consulta de Saldo",        
        selCriterios: [
            "Seleccione una opción",
            "Nombre",
            "Numero de tarjeta",
            "Número de cuenta",
            "Cliente único"
        ],     
        divName: false,
        divTarjeta: false,
        divCuenta: false,
        divCU: false,
        isDesac: true,
        divBuscar: false,
        isCheckPrimerAp: false,
        isCheckSegundoAp: false,       
        listaComun: [],
        url: "../Servicio/ConSaldoService.svc/rest/",
        nombre: "",
        apellidoP: "",
        apellidoM: "",
        numeroTarjeta: "",
        numeroCuenta: "",
        pais: "",
        canal: "",
        sucursal:"",
        cons: ""
    },
    methods: {
        peticion(_url, _data, _f, _method){	            
            var header = { headers: { "content-type": "application/json"} };		
            if(_method == "GET"){
                this.$http.get(_url+_data).then((data) => {						
                    data && _f(data);
                }, error => {
                    console.error(error);//depende de cada áre el manejo de errores
                });
            }else{
                this.$http.post(_url,_data,header).then((data) => {
                    data && _f(data);
                }, error => {
                    console.error(error);//depende de cada áre el manejo de errores
                });
            }
        },
        getData(event){
            this.limpiarCampos();
            this.divName= false;
            this.divTarjeta= false;
            this.divCuenta= false;
            this. divCU = false;  
            switch(+event.target.value){
                case 0:              
                    this.isDesac = true;
                    this.divBuscar = false;
                break;
                case 1: 
                    this.divName= true;
                break;
                case 2: 
                    this.divTarjeta= true;
                break;
                case 3: 
                    this.divCuenta= true;
                break;
                case 4: 
                    this. divCU = true;
                break;
            }
            (event.target.value != 0) && (this.isDesac = false);             
        },
        getDatos(datos){            				            
            this.listaComun  = datos.body.d.length ?  datos.body.d : [datos.body.d];//realizar validaciones más robustas            			
        },
        limpiarCampos(){
            this.nombre= "";
            this.apellidoP= "";
            this.apellidoM= "";
            this.numeroTarjeta= "";
            this.numeroCuenta= "";
            this.pais= "";
            this.canal= "";
            this.sucursal="";
            this.cons= "";
        },
        btnBuscar(){
            //validar los campos o validarlos mientras escribe
            if(this.divName){                
                var objNombre = {
                    value : {
                        ApellidoM : this.apellidoM,
                        ApellidoP : this.apellidoP,
                        Nombre : this.nombre
                    }		
                }
                this.peticion(this.url +"GetNombre", objNombre,v.getDatos,"POST");
            }else if(this.divTarjeta){
                var objTarjeta = {
                    value : {
                        Tarjeta : this.numeroTarjeta
                    }		
                }
                this.peticion(this.url +"GetTarjeta", objTarjeta,v.getDatos,"POST");
            }else if(this.divCuenta){
                var objCuenta = {
                    value : {
                        Cuenta: this.numeroCuenta
                    }		
                }
                this.peticion(this.url +"GetCuenta", objCuenta,v.getDatos,"POST");
            }else if(this.divCU){
                var obj = {
                    value : {
                        Pais : this.pais,
                        Canal : this.canal,
                        Sucursal : this.sucursal,
                        Cons : this.cons
                    }		
                }
                this.peticion(this.url +"GetCu", obj,v.getDatos,"POST");
            }
            this.divBuscar = true;
        }
    }
});