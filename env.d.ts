/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL: string
  readonly VITE_STORAGE_PREFIX: string
  readonly VITE_APP_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
