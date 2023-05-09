import { Global, Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  providers: [ProviderService],
  exports: [HttpModule, ProviderService]
})
export class ProviderModule {}
