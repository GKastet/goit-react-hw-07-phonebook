import axios from 'axios';

const baseUrl = 'https://64c124d3fa35860baea00fb8.mockapi.io/contacts';

const instance = axios.create({
  baseURL: baseUrl
});

export const getApiContact = async () =>{       
    const {data} = await instance.get('/');
    return data
}

export const postApiContact = async (contact) =>{
    const {data} = await instance.post('/', contact);
    return data
}

export const deleteApiContact = async (id) =>{
    const {data} = await instance.delete(`/${id}`);
    return data
}