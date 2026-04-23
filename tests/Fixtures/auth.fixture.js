//API+UI Automation is Hybrid automation

import{test as base, expect} from '@playwright/test';

export const test =base.extend({
auth: async({request},use)=>{

const res=await request.post('/user',
    {
    data:{'user':username, 'pwd':password}
    })

const token=res.json().token;
await use(token);
 
console.log(token);

}
});