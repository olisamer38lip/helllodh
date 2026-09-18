import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'hello-app-starter-d2ctlywt',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_MYC8NTYO-zRcbDEo1iiqM-p3_sY7pfar',
  authRequired: false,
  auth: { mode: 'managed' },
})
