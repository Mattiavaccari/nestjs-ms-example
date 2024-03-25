import type {
  ConfigFactory,
  ConfigFactoryKeyHost,
  ConfigObject,
} from '@nestjs/config';

export type RegisteredConfig<
  T extends ConfigObject,
  TFactory extends ConfigFactory = ConfigFactory<T>,
> = TFactory & ConfigFactoryKeyHost<ReturnType<TFactory>>;
