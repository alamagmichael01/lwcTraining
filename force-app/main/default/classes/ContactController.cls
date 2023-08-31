public class ContactController {

    @AuraEnabled (Cacheable=true)
    public static List<Contact> getContactList(){
        List<Contact> contList =[SELECT Id, LastName, FirstName FROM CONTACT LIMIT 10];
        return contList;
    }
}