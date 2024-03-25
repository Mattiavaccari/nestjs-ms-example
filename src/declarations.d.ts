import type { EnvironmentSchema } from '@example/common/schemas';

type OptionalKeys<T> = {
  [K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? K : never;
}[keyof T];

type RequiredKeys<T> = {
  [K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? never : K;
}[keyof T];

type RequiredEnvironmentKeys = RequiredKeys<EnvironmentSchema>;
type OptionalEnvironmentKeys = OptionalKeys<EnvironmentSchema>;
type ApplicationEnvironment = Record<RequiredEnvironmentKeys, string> &
  Partial<Record<OptionalEnvironmentKeys, string>>;

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv extends ApplicationEnvironment {}
  }
}
