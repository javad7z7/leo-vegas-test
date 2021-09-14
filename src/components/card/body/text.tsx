export const CardText = ({ description }) => (
  <span className="text-gray-600 text-[12px] py-3 text-left">
    {description.substr(0, 160)}
  </span>
)
