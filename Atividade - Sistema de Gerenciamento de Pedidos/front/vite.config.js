import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    // fixando porta para nao haver problemas com definição de porta escolhida de forma automática pelo transpilador
    port: 5184, 
  },
})
