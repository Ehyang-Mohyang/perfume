import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 프록시할 경로 설정
      '/oauth2/authorization/naver': {
        target: 'https://perfume-bside.site/', // 프록시할 서버 URL
        changeOrigin: true,
        secure: false, // HTTPS를 사용하는 경우 필요할 수 있음
        // 필요한 경우 경로 재작성 설정
        rewrite: (path) => path.replace(/^\/oauth2\/authorization\/naver/, '')
      }
    }
  }
})
