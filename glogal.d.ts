export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        URL_BANK: string;
    }
  }
}
