import axios from 'axios';

import environment from '../../helpers/utils/environment';
import { Member } from '../../helpers/interfaces'

class HandlerMailchimp {

    get headers() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `auth ${environment('MAILCHIMP_TOKEN')}`,
        }
    }
    
    async addMember(data: any) {
        try {
            const response = await axios.post<any>(
                `${environment('MAILCHIMP_BASEURL')}/lists/${environment('DEFAULT_LIST')}/members`,
                data,
                {
                    headers: this.headers,
                },
            );
            return response.data;
        } catch (error: any) {
            console.log(error)
            return error.code;
        }
    };
}

export default HandlerMailchimp;