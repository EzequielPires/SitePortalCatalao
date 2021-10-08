import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.portalcatalao.com.br/',
    headers: {'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNpdGVAcG9ydGFsY2F0YWxhby5jb20uYnIifQ.AEtUAjCUvMVcg1iUqq8JysCX0cySQFP9ciG2AO1oeVc'}
});

export default api;