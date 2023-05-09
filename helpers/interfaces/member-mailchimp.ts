export interface Member {
    id:                               string;
    email_address:                    string;
    full_name:                        string;
    status:                           string;
    merge_fields:                     MergeFields;
    stats:                            Stats;
    ip_signup:                        string;
    timestamp_signup:                 string;
    ip_opt:                           string;
    timestamp_opt:                    Date;
    member_rating:                    number;
    last_changed:                     Date;
    language:                         string;
    vip:                              boolean;
    email_client:                     string;
    location:                         Location;
    source:                           string;
    tags_count:                       number;
    tags:                             any[];
    list_id:                          string;
    _links:                           Link[];
}

export interface Link {
    rel:           string;
    href:          string;
    method:        string;
    targetSchema?: string;
    schema?:       string;
}

export interface Location {
    latitude:     number;
    longitude:    number;
    gmtoff:       number;
    dstoff:       number;
    country_code: string;
    timezone:     string;
    region:       string;
}

export interface MergeFields {
    FNAME:    string;
    LNAME:    string;
    ADDRESS:  string;
    PHONE:    string;
    BIRTHDAY: string;
}

export interface Stats {
    avg_open_rate:  number;
    avg_click_rate: number;
}
