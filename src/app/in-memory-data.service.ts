import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    
  createDb() {
    let radContacts = [
      {
        id: 11, 
        name: 'Mr. Nice',
        email: 'nice@mail.com',
        number: '5555555555',
        company: 'ABC, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    },
    {
        id: 12, 
        name: 'Narco',
        email: 'narco@mail.com',
        number: '545.445.5255',
        company: 'ABCDEF, LLC',
        contactType: 'Sales',
        notes: 'Worst customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    },
    {
        id: 13, 
        name: 'Bombasto',
        email: 'bomb@mail.com',
        number: '222.555.5555',
        company: 'EFABC, LLC',
        contactType: 'Lead',
        notes: 'Mediocre customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: true
    },
    {
        id: 14, 
        name: 'Celeritas',
        email: 'Cel@mail.com',
        number: '111.555.5555',
        company: 'XYZ, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    },
    {
        id: 15, 
        name: 'Magneta',
        email: 'nice@mail.com',
        number: '555.555.5555',
        company: 'ABCcc, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    },
    {
        id: 16, 
        name: 'RubberMan',
        email: 'nice@mail.com',
        number: '555.555.5555',
        company: 'ABCee, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false

    },
    {
        id: 17, 
        name: 'Dynama',
        email: 'nice@mail.com',
        number: '555.555.5555',
        company: 'ABCdd, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    },
    {
        id: 18, 
        name: 'Dr IQ',
        email: 'iq@mail.com',
        number: '555.555.5555',
        company: 'ABCxx, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    },
    {
        id: 19, 
        name: 'Magma',
        email: 'mag@mail.com',
        number: '555.555.5555',
        company: 'ABCqq, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    },
    {
        id: 20, 
        name: 'Tornado',
        email: 'tor@mail.com',
        number: '555.555.5555',
        company: 'ABCeeqq, LLC',
        contactType: 'Lead',
        notes: 'Best customer ever! Need to reach out to him now!',
        lastContactMethod:'e-mail',
        favorites: false
    }
        ];
    return {radContacts};
  }
}