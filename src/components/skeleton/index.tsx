import { LoaidngBounce } from 'components/loading'

const Skeleton = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex justify-center items-center pt-64">
      <LoaidngBounce size="large" />
    </div>
  )
}
export { Skeleton }
