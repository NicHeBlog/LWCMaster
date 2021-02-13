import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email',
    'Contact.StartDate__c',
    'Contact.Birthdate',
];

export default class GetContactRecordFromBackend extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;

    get name() {
        return this.contact.data.fields.Name.value;
    }

    get title() {
        return this.contact.data.fields.Title.value;
    }

    get phone() {
        return this.contact.data.fields.Phone.value;
    }

    get email() {
        return this.contact.data.fields.Email.value;
    }
    
    get startdate() {
        return this.contact.data.fields.StartDate__c.value;
    }

    get birthday() {
        return this.contact.data.fields.Birthdate.value;
    }
}