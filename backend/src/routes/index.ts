import * as Types from '../../types';
import { Request, Response } from 'express';
import CreateState from '@/controllers/State/CreateState';
import GetState from '@/controllers/State/GetState';
import DeleteState from '@/controllers/State/DeleteState';
import UpdateState from '@/controllers/State/UpdateState';
import GetCity from '@/controllers/City/GetCity';
import CreateCity from '@/controllers/City/CreateCity';
import DeleteCity from '@/controllers/City/DeleteCity';
import UpdateCity from '@/controllers/City/UpdateCity';

export const routes: Types.IRoutes = {
  get: [
    {
      path: '/',
      callback: (req: Request, res: Response) => {
        req;
        res.json({
          status: 'ONLINE',
          more: 'Leia a documentação em: http://localhost:3333/api-docs',
        });
      },
    },
    {
      path: '/state',
      callback: GetState,
    },
    /**
     * @swagger
     * /state:
     *  get:
     *    summary: Return a list of states
     *    tags:
     *      - State
     *    responses:
     *      '200':
     *         description: A JSON array of state name and initials
     *
     *
     */
    {
      path: '/city/:idState',
      callback: GetCity,
    },
    /**
     * @swagger
     * /city/{idState}:
     *  get:
     *    summary: Return a list of city
     *    description: This endpoint can be used to search for cities related to a state. This search can be improved with the name filter.
     *    parameters:
     *      - name: idState
     *        in: path
     *        description: Search for cities in that state.
     *        required: true
     *      - name: name
     *        in: query string
     *        description: Search by similarity of name or initials.
     *    tags:
     *      - City
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */
    {
      path: '/city',
      callback: GetCity,
    },
    /**
     * @swagger
     * /city:
     *  get:
     *    summary: Return a list of city
     *    description: This endpoint can be used to search for all cities. This search can be improved with the name filter.
     *    parameters:
     *      - name: name
     *        in: query string
     *        description: Search by similarity of name or initials.
     *    tags:
     *      - City
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */
  ],
  post: [
    {
      path: '/state',
      callback: CreateState,
    },
    /**
     * @swagger
     * /state:
     *  post:
     *    summary: Creating a new state
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              name:
     *                type: string
     *              initials:
     *                type: string
     *    tags:
     *      - State
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */
    {
      path: '/city/:idState',
      callback: CreateCity,
    },
    /**
     * @swagger
     * /city/{idState}:
     *  post:
     *    summary: Creation of a new city related to the state
     *    parameters:
     *      - name: idState
     *        in: path
     *        description: Search for cities in that state.
     *        required: true
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              name:
     *                type: string
     *    tags:
     *      - City
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */
  ],
  put: [
    {
      path: '/state/:id',
      callback: UpdateState,
    },
    /**
     * @swagger
     * /state/{idState}:
     *  put:
     *    summary: Update of a state
     *    parameters:
     *      - name: idState
     *        in: path
     *        description: Search for cities in that state.
     *        required: true
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              name:
     *                type: string
     *    tags:
     *      - State
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */

    {
      path: '/city/:id',
      callback: UpdateCity,
    },
    /**
     * @swagger
     * /city/{idCity}:
     *  put:
     *    summary: Update of a city
     *    parameters:
     *      - name: idCity
     *        in: path
     *        description: Search for cities in that state.
     *        required: true
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              name:
     *                type: string
     *    tags:
     *      - City
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */
  ],
  delete: [
    {
      path: '/state/:id',
      callback: DeleteState,
    },
    /**
     * @swagger
     * /state/{idState}:
     *  delete:
     *    summary: Delete a state
     *    parameters:
     *      - name: idState
     *        in: path
     *        description: Search for cities in that state.
     *        required: true
     *    tags:
     *      - State
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */

    {
      path: '/city/:id',
      callback: DeleteCity,
    },
    /**
     * @swagger
     * /city/{idCity}:
     *  delete:
     *    summary: Delete a city
     *    parameters:
     *      - name: idCity
     *        in: path
     *        description: Search for cities in that state.
     *        required: true
     *    tags:
     *      - City
     *    responses:
     *      '200':
     *         description: An array of cities json referring to that state.
     *
     *
     */
  ],
};
