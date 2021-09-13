import { lazy } from 'react'

export const route = {
  path: '/admin/patients/interactions/:id',
  name: 'ROUTE:ADMIN:PATIENTS/INTERACTIONS',
  exact: true,
  component: lazy(() => import('.')),
}
