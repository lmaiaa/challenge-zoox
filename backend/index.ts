require('module-alias/register'); //importando alias
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); //configurando dotenv
//dependencies
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';
import { routes } from '@/routes';

import { Server } from './src/Server'; //importando classe Server

const configs = {
  //dependencias e rotas para inicializar o servidor
  dependencies: {
    express,
    logger,
    cors,
    bodyParser,
    swaggerUi,
    mongoose,
  },
  routes,
};

const server = new Server(configs); //criando a classe do servidor

server.start(); //inicializando servidor
