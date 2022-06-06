// const axios = require('axios').default;
import axios from 'axios';
const resTeste = document.getElementById('teste')
const botaoProcurar = document.getElementById('search')

botaoProcurar.onclick = axios.get('http://localhost:8000')
  .then(response =>  {
    // handle success
    console.log(response);
  })