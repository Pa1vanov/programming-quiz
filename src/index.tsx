import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from 'routes/routes'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new QueryClient()

root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <QueryClientProvider client={client}>
        <MantineProvider withNormalizeCSS>
          <Notifications position="top-right" />
          <Routes />
        </MantineProvider>
      </QueryClientProvider>
    </QueryParamProvider>
  </BrowserRouter>
)
