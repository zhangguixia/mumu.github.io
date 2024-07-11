import axios from "axios";


export const getData = (params) => axios.post('/getdata/findData',{
    data});


export const getInfo = (params) => axios.get('/getdata/findInfo',{
    paramas: params});