# NestNgIonMonorepo
This application used below UI and API technologies and implemented monorepo concept with unified endpoint:
UI: Angular with Ionic framework
API: NestJs

Benefits of Using a Nest Angular Ionic Monorepo for Web Applications:

For monorepo change in below files:
Frontend/UI End:
1) angular.json: "outputPath": "../www",

API End:
1) Install swagger npm package:
$ npm install --save @nestjs/swagger

2) Changes in main.ts file:
const PORT = process.env.PORT || 3001;
  const config = new DocumentBuilder()
    .setTitle('Sample APP')
    .setDescription('The Sample App API description')
    .setVersion('1.0')
    .addTag('Sample APP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

3) Install "serve static" npm package:
$ npm install --save @nestjs/serve-static

4) API app.module.ts:
 imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'www'),
      serveRoot:'/'
    }),
  ],


5) API app.controller.ts:
@Controller('api')

6) Commands:
$ cd frontend
$ npm run build
$ cd ..
$ npm run build
$ npm run start

Application is live 🎉: https://nestngionmonorepo.onrender.com


Used below Versions: 
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