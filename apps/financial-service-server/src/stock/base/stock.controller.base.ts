/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StockService } from "../stock.service";
import { StockCreateInput } from "./StockCreateInput";
import { Stock } from "./Stock";
import { StockFindManyArgs } from "./StockFindManyArgs";
import { StockWhereUniqueInput } from "./StockWhereUniqueInput";
import { StockUpdateInput } from "./StockUpdateInput";
import { TradeFindManyArgs } from "../../trade/base/TradeFindManyArgs";
import { Trade } from "../../trade/base/Trade";
import { TradeWhereUniqueInput } from "../../trade/base/TradeWhereUniqueInput";

export class StockControllerBase {
  constructor(protected readonly service: StockService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Stock })
  async createStock(@common.Body() data: StockCreateInput): Promise<Stock> {
    return await this.service.createStock({
      data: {
        ...data,

        exchange: data.exchange
          ? {
              connect: data.exchange,
            }
          : undefined,
      },
      select: {
        avgVolume: true,
        createdAt: true,
        dividendYield: true,

        exchange: {
          select: {
            id: true,
          },
        },

        id: true,
        industry: true,
        marketCap: true,
        name: true,
        peRatio: true,
        price: true,
        sector: true,
        ticker: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Stock] })
  @ApiNestedQuery(StockFindManyArgs)
  async stocks(@common.Req() request: Request): Promise<Stock[]> {
    const args = plainToClass(StockFindManyArgs, request.query);
    return this.service.stocks({
      ...args,
      select: {
        avgVolume: true,
        createdAt: true,
        dividendYield: true,

        exchange: {
          select: {
            id: true,
          },
        },

        id: true,
        industry: true,
        marketCap: true,
        name: true,
        peRatio: true,
        price: true,
        sector: true,
        ticker: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Stock })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stock(
    @common.Param() params: StockWhereUniqueInput
  ): Promise<Stock | null> {
    const result = await this.service.stock({
      where: params,
      select: {
        avgVolume: true,
        createdAt: true,
        dividendYield: true,

        exchange: {
          select: {
            id: true,
          },
        },

        id: true,
        industry: true,
        marketCap: true,
        name: true,
        peRatio: true,
        price: true,
        sector: true,
        ticker: true,
        updatedAt: true,
        website: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Stock })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStock(
    @common.Param() params: StockWhereUniqueInput,
    @common.Body() data: StockUpdateInput
  ): Promise<Stock | null> {
    try {
      return await this.service.updateStock({
        where: params,
        data: {
          ...data,

          exchange: data.exchange
            ? {
                connect: data.exchange,
              }
            : undefined,
        },
        select: {
          avgVolume: true,
          createdAt: true,
          dividendYield: true,

          exchange: {
            select: {
              id: true,
            },
          },

          id: true,
          industry: true,
          marketCap: true,
          name: true,
          peRatio: true,
          price: true,
          sector: true,
          ticker: true,
          updatedAt: true,
          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Stock })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStock(
    @common.Param() params: StockWhereUniqueInput
  ): Promise<Stock | null> {
    try {
      return await this.service.deleteStock({
        where: params,
        select: {
          avgVolume: true,
          createdAt: true,
          dividendYield: true,

          exchange: {
            select: {
              id: true,
            },
          },

          id: true,
          industry: true,
          marketCap: true,
          name: true,
          peRatio: true,
          price: true,
          sector: true,
          ticker: true,
          updatedAt: true,
          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/trades")
  @ApiNestedQuery(TradeFindManyArgs)
  async findTrades(
    @common.Req() request: Request,
    @common.Param() params: StockWhereUniqueInput
  ): Promise<Trade[]> {
    const query = plainToClass(TradeFindManyArgs, request.query);
    const results = await this.service.findTrades(params.id, {
      ...query,
      select: {
        broker: true,
        createdAt: true,
        date: true,
        fees: true,
        id: true,
        price: true,
        quantity: true,
        status: true,

        stock: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/trades")
  async connectTrades(
    @common.Param() params: StockWhereUniqueInput,
    @common.Body() body: TradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trades: {
        connect: body,
      },
    };
    await this.service.updateStock({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/trades")
  async updateTrades(
    @common.Param() params: StockWhereUniqueInput,
    @common.Body() body: TradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trades: {
        set: body,
      },
    };
    await this.service.updateStock({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/trades")
  async disconnectTrades(
    @common.Param() params: StockWhereUniqueInput,
    @common.Body() body: TradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trades: {
        disconnect: body,
      },
    };
    await this.service.updateStock({
      where: params,
      data,
      select: { id: true },
    });
  }
}