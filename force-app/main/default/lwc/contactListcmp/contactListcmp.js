import { LightningElement,track,wire } from "lwc";
import getContacts from'@salesforce/apex/ContactController.getContactList';

export default class ContactListcmp extends LightningElement {

   constructor(){
      super();
      console.log('Inside Constructor');
   }

   connectedCallback(){
      console.log('Inside Connected Callback');
   }

   disconnectedCallback(){
      console.log('Inside disConnected Callback');
   }

  // render(){
   //   console.log('Inside drender');
   //}

    @track contactList;

    @wire(getContacts)contactList;

}