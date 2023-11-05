# AngularIonicNestWithMonorepo
This application used below UI and API technologies and implemented monorepo concept with unified endpoint:
UI: Angular with Ionic framework
API: NestJs

For monorepo change in below files:
angular.json: "outputPath": "../www",


install swagger:
npm install --save @nestjs/swagger
const PORT = process.env.PORT || 3001;
  const config = new DocumentBuilder()
    .setTitle('Sample APP')
    .setDescription('The Sample App API description')
    .setVersion('1.0')
    .addTag('Sample APP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);


install serve static:
npm install --save @nestjs/serve-static

API app.module.ts:
 imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'www'),
      serveRoot:'/'
    }),
  ],


app controller:
@Controller('api')


cd frontend
npm run build
cd ..

npm run build
npm run start



Versions 
$ ng v
Angular CLI: 16.2.3

$ ionic -v
Ionic CLI 7.1.1

$ nest -v
10.1.18

$ node -v
v20.6.1

$ npm -v
9.8.1



