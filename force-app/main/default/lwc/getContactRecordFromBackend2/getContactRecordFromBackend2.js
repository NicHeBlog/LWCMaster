//target :  练习使用getFieldValue,
//          getFieldDisplayValue 
//          来获取record的字段值
//position: LWC Playground Contact record page

import { LightningElement, api, wire } from 'lwc';
import { getRecord,getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import STARTDATE_FIELD from '@salesforce/schema/Contact.StartDate__c';
import BIRTHDATE_FIELD from '@salesforce/schema/Contact.Birthdate';

const fields = [NAME_FIELD,TITLE_FIELD,PHONE_FIELD,EMAIL_FIELD,STARTDATE_FIELD,BIRTHDATE_FIELD];

export default class GetContactRecordFromBackend extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields })
    contact;

    get name() {
        return getFieldValue(this.contact.data, NAME_FIELD);
    }

    get title() {
        return getFieldValue(this.contact.data, TITLE_FIELD);
    }

    get phone() {
        return getFieldValue(this.contact.data, PHONE_FIELD);
    }

    get email() {
        return getFieldValue(this.contact.data, EMAIL_FIELD);
    }
    
    get startdate() {
        return getFieldValue(this.contact.data, STARTDATE_FIELD);
    }

    get birthday() {
        return getFieldDisplayValue(this.contact.data, BIRTHDATE_FIELD);
    }
}