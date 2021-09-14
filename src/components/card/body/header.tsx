import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { ICStar } from 'icons/star'
import { ICStarFill } from 'icons/star-fill'

export const CardHeader = ({ title }) => (
  <span className="text-gray-800 font-semibold text-center">
    {title.substr(0, 20)}
  </span>
)
