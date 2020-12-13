const erroHandler = require('@/middlewares/errors-handler');
import { State, City } from '@/model/index';
import * as Types from '../types';

export class Server {
  dependencies: Record<string, any>;
  routes: Types.IRoutes;
  constructor({
    dependencies,
    routes,
  }: {
    dependencies: Record<string, any>;
    routes: Types.IRoutes;
  }) {
    this.dependencies = {
      ...dependencies,
    };
    this.routes = routes;
  } // classe Server que recebe as dependencias e as rotas

  async start() {
    const { dependencies, routes } = this; //pegando dependencias do this
    this.setServerDependencies(dependencies); //setando dependencias no server
    this.configureExpress(dependencies); //configurando express
    this.startApi(dependencies, routes); //startando express configurado e api com suas dependecnias
  }
  set(name: string, dependencie: Record<string, any>) {
    //setagem no this
    this.dependencies[name] = dependencie;
  }
  setServerDependencies({ express }: Record<string, any>) {
    const app = express();
    this.set('app', app); //setando app no this
  }
  configureExpress({ app, cors, logger, bodyParser }: Record<string, any>) {
    //configurando express
    app.use(cors()); //middleware cors
    app.use(logger('dev')); //middleware log
    app.use(erroHandler); //middleware interceptador de erros
    //configurando body parser para utilização fácil do body no request
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: '500mb',
      }),
    );
    app.use(
      bodyParser.json({
        limit: '500mb',
      }),
    );
  }
  startApi(dependencies: Record<string, any>, routes: Types.IRoutes) {
    const { app } = dependencies;
    const { mongoose } = dependencies;

    mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); //conectando no MongoDB
    mongoose.connection.once('open', () => {
      State;
      City;
    });

    Object.entries(routes).forEach(([method, route]) => {
      //roteirizando as rotas antes de inicializar o servidor
      route.forEach(
        ({ path, callback }: { path: string; callback: Function }) => {
          app[method](path, callback);
        },
      );
    });
    const { swaggerUi } = dependencies;
    app.use(
      // criando rotar de documentação e passando as configurações
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(require('./../swagger.config'), {
        customCss: '.swagger-ui .topbar { display: none }',
      }),
    );
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      //inicializando servidor na porta setada no .env
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  }
}
