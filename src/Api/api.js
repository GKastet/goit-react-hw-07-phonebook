import axios from 'axios';

//const baseUrl = 'https://64c124d3fa35860baea00fb8.mockapi.io/contacts';

// const instance = axios.create({
//   baseUrl: baseUrl
// });



// export const getApiContact = async () =>{
//     console.log(123);    
//     const {data} = await instance.get();
//     return data
// }

export const getApiContact = async () =>{
    console.log(123);    
    const {data} = await axios.get('https://64c124d3fa35860baea00fb8.mockapi.io/contacts');
    return data
}

// export const postApiContact = async (contact) =>{
//     const {data} = await instance.post('/contacts', contact);
//     return data
// }
export const postApiContact = async (contact) =>{
    const {data} = await axios.post('https://64c124d3fa35860baea00fb8.mockapi.io/contacts', contact);
    return data
}

// export const deleteApiContact = async (id) =>{
//     const {data} = await instance.delete(`/contacts/${id}`);
//     return data
// }

export const deleteApiContact = async (id) =>{
    const {data} = await axios.delete(`https://64c124d3fa35860baea00fb8.mockapi.io/contacts/${id}`);
    return data
}

// export const getApiContact = async () => {
//   const { data } = await axios.get(baseUrl, {
//     params: {
//       headers: { 'content-type': 'application/json' },
//     },
//   });
//   console.log(data);
//   console.log(data.map(contact => JSON.parse(contact.body)));
//   return data;
// };

// export const postApiContact = async contacts => {
//   const { data } = await axios.post(baseUrl, {
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify(contacts),
//   });
//   return data;
// };

                                    //contact.id
// export const deleteApiContact = async  ({id}) => {
//     const { data } = await axios.delete(baseUrl, `/${id}`);
//     return data;
//   };