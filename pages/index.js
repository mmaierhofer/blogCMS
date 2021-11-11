import Header from '../components/header/header'
import OrderStatusWidget from '../components/home/orderStatusWidget'
import ProductWidget from '../components/home/productWidget'
import PrognoseWidget from '../components/home/prognoseWidget'
import SalesWidget from '../components/home/salesWidget'
import UsersWidget from '../components/home/usersWidget'

export default function Home() {
  return (
    <div className="page flex-col">
      <div className="w-full h-20">
        <Header title="anything" />
      </div>
      <div className="flex flex-col w-full h-5/6">
        <div className="flex flex-row h-1/6">
          <div className="w-1/3 p-5">
            <SalesWidget earnings={"420,50"} title={"Earnings this month"}/>
          </div>
          <div className="w-1/3 p-5">
            <SalesWidget earnings={"2059"} title={"Earnings this year"}/>
          </div>
          <div className="w-1/3 p-5">
            <SalesWidget earnings={"12806"} title={"Total Earnings"}/>
          </div>
        </div>
        <div className="flex flex-row w-full h-3/6">
          <div className="w-2/3 p-5">
            <PrognoseWidget />
          </div>
          <div className="w-1/3 p-5">
            <OrderStatusWidget />
          </div>
        </div>
        <div className="flex flex-row w-full h-2/6">
          <div className="w-1/2 p-5">
            <ProductWidget />
          </div>
          <div className="w-1/2 p-5">
            <UsersWidget />
          </div>
        </div>
      </div>
    </div>
  )
}
