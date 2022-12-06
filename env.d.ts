/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL: string
  readonly VITE_STORAGE_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
