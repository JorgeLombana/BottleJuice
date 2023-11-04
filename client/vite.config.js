import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{// config the server to don't have the cors problem
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false,
      }
    }
  }
})
