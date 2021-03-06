/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ControlDeviceCreateDto,
  ControlDeviceUpdateDto,
} from './dtos/control-device.dto';
import { ControlDeviceService } from './control-devices.service';
import { JwtAuthGuard } from 'src/shared/auth/jwt-auth.guard';
import { SettingDto } from './dtos/setting.dto';

@Controller('api.control')
export class ControlDeviceController {
  constructor(private readonly controlDeviceService: ControlDeviceService) {}

  @Get()
  async list() {
    return this.controlDeviceService.list();
  }

  @Put('setting')
  @UseGuards(JwtAuthGuard)
  async setting(@Body() args: SettingDto) {
    return this.controlDeviceService.setting(args);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async get(@Param('id') id: string) {
    return this.controlDeviceService.get(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() args: ControlDeviceCreateDto) {
    return this.controlDeviceService.create(args);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() args: ControlDeviceUpdateDto) {
    return this.controlDeviceService.update(id, args);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return this.controlDeviceService.delete(id);
  }
}
