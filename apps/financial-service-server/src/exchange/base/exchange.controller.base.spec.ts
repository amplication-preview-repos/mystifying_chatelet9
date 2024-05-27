import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ExchangeController } from "../exchange.controller";
import { ExchangeService } from "../exchange.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  ceo: "exampleCeo",
  closingTime: new Date(),
  country: "exampleCountry",
  createdAt: new Date(),
  currency: "exampleCurrency",
  established: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  name: "exampleName",
  openingTime: new Date(),
  timezone: "exampleTimezone",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  ceo: "exampleCeo",
  closingTime: new Date(),
  country: "exampleCountry",
  createdAt: new Date(),
  currency: "exampleCurrency",
  established: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  name: "exampleName",
  openingTime: new Date(),
  timezone: "exampleTimezone",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    ceo: "exampleCeo",
    closingTime: new Date(),
    country: "exampleCountry",
    createdAt: new Date(),
    currency: "exampleCurrency",
    established: new Date(),
    id: "exampleId",
    location: "exampleLocation",
    name: "exampleName",
    openingTime: new Date(),
    timezone: "exampleTimezone",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  ceo: "exampleCeo",
  closingTime: new Date(),
  country: "exampleCountry",
  createdAt: new Date(),
  currency: "exampleCurrency",
  established: new Date(),
  id: "exampleId",
  location: "exampleLocation",
  name: "exampleName",
  openingTime: new Date(),
  timezone: "exampleTimezone",
  updatedAt: new Date(),
};

const service = {
  createExchange() {
    return CREATE_RESULT;
  },
  exchanges: () => FIND_MANY_RESULT,
  exchange: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Exchange", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ExchangeService,
          useValue: service,
        },
      ],
      controllers: [ExchangeController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /exchanges", async () => {
    await request(app.getHttpServer())
      .post("/exchanges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closingTime: CREATE_RESULT.closingTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        established: CREATE_RESULT.established.toISOString(),
        openingTime: CREATE_RESULT.openingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /exchanges", async () => {
    await request(app.getHttpServer())
      .get("/exchanges")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          closingTime: FIND_MANY_RESULT[0].closingTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          established: FIND_MANY_RESULT[0].established.toISOString(),
          openingTime: FIND_MANY_RESULT[0].openingTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /exchanges/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/exchanges"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /exchanges/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/exchanges"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        closingTime: FIND_ONE_RESULT.closingTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        established: FIND_ONE_RESULT.established.toISOString(),
        openingTime: FIND_ONE_RESULT.openingTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /exchanges existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/exchanges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closingTime: CREATE_RESULT.closingTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        established: CREATE_RESULT.established.toISOString(),
        openingTime: CREATE_RESULT.openingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/exchanges")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
