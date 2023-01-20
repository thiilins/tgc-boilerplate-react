/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components'
import darkTheme from '@/styles/themes/dark'
type Theme = typeof darkTheme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
