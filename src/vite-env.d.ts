/// <reference types="vite/client" />

interface ImportMetaEnv  {
            VITE_MAIN_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
  