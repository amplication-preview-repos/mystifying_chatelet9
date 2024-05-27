/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Trade } from "./Trade";
import { TradeCountArgs } from "./TradeCountArgs";
import { TradeFindManyArgs } from "./TradeFindManyArgs";
import { TradeFindUniqueArgs } from "./TradeFindUniqueArgs";
import { CreateTradeArgs } from "./CreateTradeArgs";
import { UpdateTradeArgs } from "./UpdateTradeArgs";
import { DeleteTradeArgs } from "./DeleteTradeArgs";
import { Stock } from "../../stock/base/Stock";
import { User } from "../../user/base/User";
import { TradeService } from "../trade.service";
@graphql.Resolver(() => Trade)
export class TradeResolverBase {
  constructor(protected readonly service: TradeService) {}

  async _tradesMeta(
    @graphql.Args() args: TradeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Trade])
  async trades(@graphql.Args() args: TradeFindManyArgs): Promise<Trade[]> {
    return this.service.trades(args);
  }

  @graphql.Query(() => Trade, { nullable: true })
  async trade(
    @graphql.Args() args: TradeFindUniqueArgs
  ): Promise<Trade | null> {
    const result = await this.service.trade(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Trade)
  async createTrade(@graphql.Args() args: CreateTradeArgs): Promise<Trade> {
    return await this.service.createTrade({
      ...args,
      data: {
        ...args.data,

        stock: args.data.stock
          ? {
              connect: args.data.stock,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Trade)
  async updateTrade(
    @graphql.Args() args: UpdateTradeArgs
  ): Promise<Trade | null> {
    try {
      return await this.service.updateTrade({
        ...args,
        data: {
          ...args.data,

          stock: args.data.stock
            ? {
                connect: args.data.stock,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Trade)
  async deleteTrade(
    @graphql.Args() args: DeleteTradeArgs
  ): Promise<Trade | null> {
    try {
      return await this.service.deleteTrade(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Stock, {
    nullable: true,
    name: "stock",
  })
  async getStock(@graphql.Parent() parent: Trade): Promise<Stock | null> {
    const result = await this.service.getStock(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Trade): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
