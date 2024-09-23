import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/createOrder.dto";



@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    async createOrder(@Body() order: CreateOrderDto) {

        return await this.ordersService.addOrder(order)
    }

    @Get(':id')
    async getOrder(@Param('id') id: string) {
        return await this.ordersService.getOrder(id)
    }
}

