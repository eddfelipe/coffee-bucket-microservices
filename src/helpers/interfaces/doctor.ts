export interface Doctor {
    Nombre:                string;
    A_Paterno:             string;
    A_Materno:             string;
    Id_Unico:              string;
    Sexo:                  string;
    Cat_Audit:             string;
    Especialidad_Primaria: string;
    conexion:              string;
    Edad:                  string;
    Email:                 string;
    Cod_Med_CRM:           string;
    Ciudad:                string;
    Ruta:                  string;
    Representante:         string;
    Cedula:                string;
}

export interface Territory {
    Id:                    string;
    SIL_Call_Specialty__c: string;
    SIL_Connection__c:     string;
    Account_vod__c:        string;
    Territory_vod__c:      string;
    Address_vod__c:        string;
}
