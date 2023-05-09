import HandlerSalesForce from '../salesforce/HandlerSalesForce';
import { ParamsAccount, Account, ResponseSF, Doctor, Territory } from '../../helpers/interfaces'

export const doctors = async (data: ParamsAccount) => {
    const sf = new HandlerSalesForce();
    const accounts: ResponseSF | any = await sf.fetchSF(
        `SELECT+FIELDS(ALL)+FROM+Account+LIMIT+${data.limit}`
    );
    const { records } = accounts;
    let doctors: Doctor[] = [];
    for (let i = 0; i < records.length; i++) {
        const element = records[i];
        const territory: ResponseSF | any = await sf.fetchSF(
            `SELECT+Id,SIL_Call_Specialty__c,SIL_Connection__c,Account_vod__c,Territory_vod__c,Address_vod__c+FROM+TSF_vod__c+WHERE+Account_vod__c+=+'${element.Id}'`
        );
        const Terr: Territory = territory.records;

        const Routes: ResponseSF | any = await sf.fetchSF(
            `SELECT+Id,Name+FROM+Territory2+WHERE+ParentTerritory2Id+=+'${Terr.Id}'`
        );
        const Route = Routes.records;
        
        const UserTerritory2Association: ResponseSF | any = await sf.fetchSF(
            `SELECT+UserId+FROM+UserTerritory2Association+WHERE+Territory2Id+=+'${ Route != undefined ? Route.Id : '' }'`
        );
        const UserAssociation = UserTerritory2Association.records;

        doctors.push({
            Nombre: element.FirstName,
            A_Paterno: element.LastName,
            A_Materno: '',
            Id_Unico: element.ID_vod__c,
            Sexo: element.Gender_vod__c,
            Cat_Audit: element.SIL_COD_AUDIT__c,
            Especialidad_Primaria: Terr.SIL_Call_Specialty__c,
            conexion: Terr.SIL_Connection__c,
            Edad: '',
            Email: element.PersonEmail,
            Cod_Med_CRM: element.Veeva_NWK_ID__c,
            Ciudad: '',
            Ruta: Route != undefined ? Route.Name : '',
            Representante: '',
            Cedula: element.National_ID_NWK__c
        })
    }
    return doctors;
}

export const representative = async (limit: string | number) => {
    let l: number | any;
    l = limit === undefined ? 100 : +limit;

    const sf = new HandlerSalesForce();
    const accounts = await sf.fetchSF(l);
}