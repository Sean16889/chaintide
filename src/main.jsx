import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider} from 'antd';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
        theme={{
          components:{
            Timeline:{
              tailColor:'#1E1E1E'
            }
          }
        }}
      >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
