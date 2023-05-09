export interface ResponseSF {
    totalSize: number;
    done:      boolean;
    records:   Account[];
    nextRecordsUrl: string;
}

export interface Account {
    attributes:                                 Attributes;
    Id:                                         string;
    IsDeleted:                                  boolean;
    MasterRecordId:                             null;
    Name:                                       string;
    LastName:                                   string;
    FirstName:                                  string;
    Salutation:                                 Salutation;
    Type:                                       null;
    RecordTypeId:                               RecordTypeID;
    ParentId:                                   null;
    BillingStreet:                              null;
    BillingCity:                                null;
    BillingState:                               null;
    BillingPostalCode:                          null;
    BillingCountry:                             null;
    BillingLatitude:                            null;
    BillingLongitude:                           null;
    BillingGeocodeAccuracy:                     null;
    BillingAddress:                             null;
    ShippingStreet:                             null;
    ShippingCity:                               null;
    ShippingState:                              null;
    ShippingPostalCode:                         null;
    ShippingCountry:                            null;
    ShippingLatitude:                           null;
    ShippingLongitude:                          null;
    ShippingGeocodeAccuracy:                    null;
    ShippingAddress:                            null;
    Phone:                                      null | string;
    Fax:                                        null;
    AccountNumber:                              null;
    Website:                                    null;
    PhotoUrl:                                   null;
    Sic:                                        null;
    Industry:                                   null;
    AnnualRevenue:                              null;
    NumberOfEmployees:                          null;
    Ownership:                                  null;
    TickerSymbol:                               null;
    Description:                                null;
    Rating:                                     null;
    Site:                                       null;
    CurrencyIsoCode:                            CurrencyISOCode;
    OwnerId:                                    ID;
    CreatedDate:                                CreatedDate;
    CreatedById:                                ID;
    LastModifiedDate:                           string;
    LastModifiedById:                           ID;
    SystemModstamp:                             string;
    LastActivityDate:                           null;
    MayEdit:                                    boolean;
    IsLocked:                                   boolean;
    LastViewedDate:                             null;
    LastReferencedDate:                         null;
    IsExcludedFromRealign:                      boolean;
    PersonContactId:                            string;
    IsPersonAccount:                            boolean;
    PersonMailingStreet:                        null;
    PersonMailingCity:                          null;
    PersonMailingState:                         null;
    PersonMailingPostalCode:                    null;
    PersonMailingCountry:                       null;
    PersonMailingLatitude:                      null;
    PersonMailingLongitude:                     null;
    PersonMailingGeocodeAccuracy:               null;
    PersonMailingAddress:                       null;
    PersonOtherStreet:                          null;
    PersonOtherCity:                            null;
    PersonOtherState:                           null;
    PersonOtherPostalCode:                      null;
    PersonOtherCountry:                         null;
    PersonOtherLatitude:                        null;
    PersonOtherLongitude:                       null;
    PersonOtherGeocodeAccuracy:                 null;
    PersonOtherAddress:                         null;
    PersonMobilePhone:                          null;
    PersonAssistantPhone:                       null;
    PersonEmail:                                null;
    PersonTitle:                                null;
    PersonDepartment:                           null;
    PersonAssistantName:                        null;
    PersonBirthdate:                            null;
    PersonHasOptedOutOfEmail:                   boolean;
    PersonHasOptedOutOfFax:                     boolean;
    PersonDoNotCall:                            boolean;
    PersonLastCURequestDate:                    null;
    PersonLastCUUpdateDate:                     null;
    PersonEmailBouncedReason:                   null;
    PersonEmailBouncedDate:                     null;
    PersonIndividualId:                         null;
    Jigsaw:                                     null;
    JigsawCompanyId:                            null;
    AccountSource:                              null;
    SicDesc:                                    null;
    External_ID_vod__c:                         null;
    Credentials_vod__c:                         null;
    Territory_vod__c:                           null;
    Exclude_from_Zip_to_Terr_Processing_vod__c: boolean;
    Group_Specialty_1_vod__c:                   null;
    Group_Specialty_2_vod__c:                   null;
    Specialty_1_vod__c:                         null;
    Specialty_2_vod__c:                         null;
    Formatted_Name_vod__c:                      string;
    Territory_Test_vod__c:                      null;
    Mobile_ID_vod__c:                           null;
    Gender_vod__c:                              GenderVODC;
    ID_vod__c:                                  null;
    Do_Not_Sync_Sales_Data_vod__c:              boolean;
    ID2_vod__c:                                 null;
    Preferred_Name_vod__c:                      null;
    Sample_Default_vod__c:                      null;
    Segmentations_vod__c:                       null;
    Restricted_Products_vod__c:                 null;
    Payer_Id_vod__c:                            null;
    IMS_Number__c:                              null;
    Do_Not_Call_vod__c:                         VODC;
    Beds__c:                                    null;
    Spend_Amount__c:                            null;
    PDRP_Opt_Out_vod__c:                        boolean;
    Spend_Status_Value_vod__c:                  SpendStatusValueVODC;
    PDRP_Opt_Out_Date_vod__c:                   null;
    Spend_Status_vod__c:                        string;
    Enable_Restricted_Products_vod__c:          boolean;
    Call_Reminder_vod__c:                       null;
    Account_Group_vod__c:                       null;
    Primary_Parent_vod__c:                      null | string;
    Color_vod__c:                               ColorVODC;
    Middle_vod__c:                              null;
    Suffix_vod__c:                              null;
    Wolters_Klewers_Number__c:                  null;
    No_Orders_vod__c:                           VODC;
    Account_Search_Business_vod__c:             null | string;
    Business_Professional_Person_vod__c:        null;
    Account_Search_FirstLast_vod__c:            string;
    Account_Search_LastFirst_vod__c:            string;
    Practice_at_Hospital_vod__c:                boolean;
    Practice_Near_Hospital_vod__c:              boolean;
    Do_Not_Create_Child_Account_vod__c:         boolean;
    Total_MDs_DOs__c:                           null;
    AHA__c:                                     null;
    Order_Type_vod__c:                          null;
    NPI_vod__c:                                 null;
    ME__c:                                      null;
    Speaker__c:                                 boolean;
    Investigator_vod__c:                        boolean;
    Default_Order_Type_vod__c:                  null;
    Account_Class_vod__c:                       null;
    Tax_Status__c:                              null;
    Model__c:                                   null;
    Offerings__c:                               null;
    Departments__c:                             null;
    Account_Type__c:                            null;
    Furigana_vod__c:                            null;
    Hospital_Type_vod__c:                       null;
    Alternate_Name_vod__c:                      null;
    ATL_Last_Update_Date_Time_vod__c:           null;
    Target_Level__c:                            null;
    Mederi_Advisor_Score__c:                    null;
    Mederi_Brand_Advocate_Score__c:             null;
    Mederi_Budget_Decider_Score__c:             null;
    Mederi_Guideline_Maker_Score__c:            null;
    Total_Revenue_000__c:                       null;
    Net_Income_Loss_000__c:                     null;
    PMPM_Income_Loss_000__c:                    null;
    Commercial_Premiums_PMPM__c:                null;
    Medical_Loss_Ratio__c:                      null;
    Medical_Expenses_PMPM__c:                   null;
    Commercial_Patient_Days_1000__c:            null;
    HMO_Market_Shr__c:                          null;
    HMO__c:                                     null;
    HMO_POS__c:                                 null;
    PPO__c:                                     null;
    PPO_POS__c:                                 null;
    Medicare__c:                                null;
    Medicaid__c:                                null;
    Mederi_ID__c:                               null;
    Mederi_Investigator_Score__c:               null;
    Mederi_Overall_KOL_Score__c:                null;
    Mederi_Person_Type__c:                      null;
    Mederi_Profession__c:                       null;
    Mederi_Researcher_Score__c:                 null;
    Spider_graph__c:                            string;
    Business_Description__c:                    null;
    Regional_Strategy__c:                       null;
    Contracts_Process__c:                       null;
    KOL_Type__c:                                null;
    Area_of_Expertise__c:                       null;
    Interests__c:                               null;
    Account_Identifier_vod__c:                  null;
    Approved_Email_Opt_Type_vod__c:             null;
    Language_vod__c:                            null;
    OK_Account_Class__c:                        null;
    OK_ExternalID__c:                           null;
    Customer_Master_Status_vod__c:              CustomerMasterStatusVODC;
    Country_Code__c:                            null;
    global_code_QS_TRNS_vod__c:                 null;
    registration_number_QS_TRNS_vod__c:         null;
    rpps_code_QS_TRNS_vod__c:                   null;
    professional_title_QS_vod__c:               null;
    student_semester_QS_TRNS_vod__c:            null;
    student_type_QS_TRNS_vod__c:                null;
    Target__c:                                  boolean;
    KOL_vod__c:                                 boolean;
    student_year_QS_TRNS_vod__c:                null;
    Number_of_Employees_QS_vod__c:              null;
    Total_Lives__c:                             null;
    Total_Physicians_Enrolled__c:               null;
    objective_social_QS_TRNS_vod__c:            null;
    hco_status_QS_vod__c:                       StatusQsVODC;
    hcp_status_QS_vod__c:                       StatusQsVODC;
    CLM_Opt_Type_vod__c:                        null;
    Master_Align_Id_vod__c:                     null;
    Country_vod__c:                             null;
    Specialty_1_QS__c:                          null;
    Specialty_2_QS__c:                          null;
    Behavior_Segmentation_QS__c:                null;
    Academic_title_QS__c:                       null;
    Business_type_QS__c:                        null;
    Total_Pharmacists__c:                       null;
    Credentials_1_QS__c:                        null;
    Credentials_2_QS__c:                        null;
    Formatted_name_QS__c:                       null;
    HCP_focus_area_1_QS__c:                     null;
    HCP_focus_area_2_QS__c:                     null;
    Maiden_name_QS__c:                          null;
    Market_access_QS__c:                        boolean;
    Nickname_QS__c:                             null;
    Opt_out_internal_customer_QS__c:            boolean;
    Opt_out_open_data_QS__c:                    boolean;
    HCP_type_QS__c:                             null;
    Specialty_1_formula_QS__c:                  null;
    Specialty_2_formula_QS__c:                  null;
    Title_formula_QS__c:                        null;
    HCO_Type_QS__c:                             null;
    Primary_Brick_QS__c:                        string;
    Primary_State_QS__c:                        null;
    Primary_Zip_Postal_code_QS__c:              string;
    Primary_Country_QS__c:                      CountryUserVODC;
    Primary_Address_QS__c:                      string;
    Primary_City_QS__c:                         string;
    Veeva_NWK_ID_QS__c:                         null;
    Career_Status_vod__c:                       null;
    Photo_vod__c:                               null;
    Medical_degree_1_QS__c:                     null;
    specialty_3_QS__c:                          null;
    HCP_Opt_Out_QS__c:                          boolean;
    Graduation_School_QS__c:                    null;
    Medical_degree_2_QS__c:                     null;
    Graduation_Year_QS__c:                      null;
    Birth_Year_QS__c:                           null;
    Birth_City_QS__c:                           null;
    Tax_ID_QS__c:                               null;
    National_ID_QS__c:                          null;
    Major_class_of_trade_QS__c:                 null;
    BIG_ID_QS__c:                               null;
    Email_HCO_QS__c:                            null;
    Country_Code_vod__c:                        null;
    Organization_ID_QS__c:                      null;
    Tax_ID_HCO_QS__c:                           null;
    FINESS_ID_QS__c:                            null;
    FINESS_Juridique_ID_QS__c:                  null;
    SIRET_ID_QS__c:                             null;
    GLN_ID_QS__c:                               null;
    HCO_Established_date_QS__c:                 null;
    Number_of_Medical_Staff_QS__c:              null;
    Number_of_Inpatients_QS__c:                 null;
    Number_of_Outpatients_QS__c:                null;
    Signature_Page_Display_Name_vod__c:         string;
    HCO_focus_area_1_QS__c:                     null;
    HCO_focus_area_2_QS__c:                     null;
    Primary_Specialty_Group_NWK__c:             null;
    Specilaty_QS__c:                            null;
    Business_Type_NWK__c:                       null;
    Credentials_1_NWK__c:                       null;
    Credentials_2_NWK__c:                       null;
    Email_HCO_NWK__c:                           null;
    Graduation_School_NWK__c:                   string;
    Graduation_Year_NWK__c:                     number;
    HCO_Type_NWK__c:                            null;
    HCO_Focus_Area_1_NWK__c:                    null;
    HCO_Focus_Area_2_NWK__c:                    null;
    HCP_Opt_Out_NWK__c:                         boolean;
    HCP_focus_area_1_NWK__c:                    null;
    HCP_focus_area_2_NWK__c:                    null;
    HCP_Type_NWK__c:                            HCPTypeNWKC;
    Professional_Activity_Mode_NWK__c:          null;
    Major_Class_of_Trade_NWK__c:                null;
    Market_access_NWK__c:                       boolean;
    Medical_Degree_1_NWK__c:                    null;
    Medical_Degree_2_NWK__c:                    null;
    Country_User_vod__c:                        CountryUserVODC;
    VSPA_ID__c:                                 string;
    Nickname_NWK__c:                            null;
    Number_of_Inpatients_NWK__c:                null;
    Number_of_Medical_Staff_NWK__c:             null;
    Number_of_Outpatients_NWK__c:               null;
    Primary_Country_NWK__c:                     CountryUserVODC;
    Specialty_1_NWK__c:                         null;
    Specialty_2_NWK__c:                         null;
    Specialty_3_NWK__c:                         null;
    Title_NWK__c:                               null;
    Veeva_NWK_ID__c:                            string;
    HCO_Status_NWK__c:                          StatusNwkC;
    HCP_Status_NWK__c:                          StatusNwkC;
    Default_Inventory_Monitoring_Type_vod__c:   null;
    Inventory_Monitoring_Type_vod__c:           null;
    Status__c:                                  StatusC;
    VOL_Hyperlink__c:                           string;
    VeevaID_vod__c:                             null;
    HIN_ID__c:                                  null;
    Preferred_Phone__c:                         null;
    Secondary_Email__c:                         null;
    VSPA_HCP_Type__c:                           null;
    VSPA_Salutation__c:                         null;
    ID_18_Account__c:                           string;
    HCP_Reason_NWK__c:                          null;
    Formatted_Name_NWK__c:                      null;
    National_Company_ID_vod__c:                 null;
    National_Healthcare_ID_vod__c:              null;
    Birth_Year_NWK__c:                          null;
    Convention_Status_NWK__c:                   null;
    Credentials_3_NWK__c:                       null;
    Grade_NWK__c:                               null;
    HCO_Accreditation_NWK__c:                   null;
    HCO_Focus_Area_3_NWK__c:                    null;
    HCO_Focus_Area_4_NWK__c:                    null;
    HCO_Focus_Area_5_NWK__c:                    null;
    HCP_Focus_Area_3_NWK__c:                    null;
    HCP_Focus_Area_4_NWK__c:                    null;
    HCP_Focus_Area_5_NWK__c:                    null;
    HCP_International_Name_NWK__c:              null;
    HCP_Link_ID_NWK__c:                         null;
    Medical_Degree_3_NWK__c:                    null;
    Number_of_Patients_NWK__c:                  null;
    Specialty_4_NWK__c:                         null;
    Specialty_5_NWK__c:                         null;
    Total_MDs_DOs_NWK__c:                       null;
    Website_2_NWK__c:                           null;
    National_ID_NWK__c:                         string;
    Organization_ID_NWK__c:                     null;
    SIL_Alternate_Name_NWK__c:                  null;
    SIL_Specialty_1_NWK__c:                     string;
    SIL_Specialty_2_NWK__c:                     null | string;
    SIL_Specialty_3_NWK__c:                     null;
    SIL_Specialty_4_NWK__c:                     null;
    SIL_Specialty_5_NWK__c:                     null;
    Tax_ID_HCO_NWK__c:                          null;
    Tax_ID_NWK__c:                              null;
    SIL_COD_AUDIT__c:                           null;
    SIL_NRO_MEDICO__c:                          null;
    Marketo_ID__c:                              null;
    Mobile_ID_vod__pc:                          null;
    mkto71_Lead_Score__pc:                      null;
}

export enum ColorVODC {
    Blue = "Blue",
    Red = "Red",
}

export enum CountryUserVODC {
    MX = "MX",
}

export enum ID {
    The0058Z000007I7V4QAA = "0058Z000007i7v4QAA",
}

export enum CreatedDate {
    The20230103T0907210000000 = "2023-01-03T09:07:21.000+0000",
    The20230103T0907220000000 = "2023-01-03T09:07:22.000+0000",
}

export enum CurrencyISOCode {
    Eur = "EUR",
}

export enum CustomerMasterStatusVODC {
    ValidVOD = "Valid_vod",
}

export enum VODC {
    NoVOD = "No_vod",
}

export enum GenderVODC {
    F = "F",
    M = "M",
}

export enum StatusNwkC {
    A = "A",
}

export enum HCPTypeNWKC {
    D = "D",
}

export enum RecordTypeID {
    The0128Z000000Uf3SQAQ = "0128Z000000uf3SQAQ",
}

export enum Salutation {
    DR = "DR",
    Drf = "DRF",
}

export enum SpendStatusValueVODC {
    InvalidVOD = "Invalid_vod",
}

export enum StatusC {
    Valid = "Valid",
}

export interface Attributes {
    type: Type;
    url:  string;
}

export enum Type {
    Account = "Account",
}

export enum StatusQsVODC {
    Active = "Active",
}
