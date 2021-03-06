/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SensorDeviceService } from './sensor-device.service';
import { JwtAuthGuard } from 'src/shared/auth/jwt-auth.guard';
import {
  SensorDeviceCreateDto,
  SensorDeviceUpdateDto,
} from './dtos/sensor-device.dto';

@Controller('api.sensor')
export class SensorDeviceController {
  constructor(private readonly sensorDeviceService: SensorDeviceService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async get(@Param('id') id: string) {
    return this.sensorDeviceService.get(id);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  async list() {
    return this.sensorDeviceService.list();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() args: SensorDeviceCreateDto) {
    return this.sensorDeviceService.create(args);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() args: SensorDeviceUpdateDto) {
    return this.sensorDeviceService.update(id, args);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.sensorDeviceService.delete(id);
  }
}
