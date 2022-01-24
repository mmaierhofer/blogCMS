import Header from "../components/header/header";
import TinyWidget from "../components/home/tinyWidget";
import OrderStatusWidget from "../components/home/orderStatusWidget";
import ProductWidget from "../components/home/productWidget";
import PrognoseWidget from "../components/home/prognoseWidget";
import SalesWidget from "../components/home/salesWidget";
import UsersWidget from "../components/home/usersWidget";
import {
  faAddressBook,
  faAlignLeft,
  faStickyNote,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="page flex-col">
      <div className="w-full h-20">
        <Header title="anything" />
      </div>
      <div className="flex flex-col w-full h-5/6">
        <div className="flex flex-row h-40">
          <div className="w-1/3 p-5">
            <TinyWidget
              header={"Why you shouldn't overuse the useMemo hook"}
              subtitle={"Current WIP"}
              icon={faAlignLeft}
              iconColor={"red"}
            />
          </div>
          <div className="w-1/3 p-5">
            <TinyWidget
              header={"Make a code example"}
              subtitle={"Last Note"}
              icon={faStickyNote}
              iconColor={"yellow"}
            />
          </div>
          <div className="w-1/3 p-5">
            <TinyWidget
              header={"15"}
              subtitle={"Total Posts"}
              icon={faCheck}
              iconColor={"green"}
            />
          </div>
        </div>
        <div className="flex flex-row w-full h-3/6">
          <div className="w-3/5 p-5">
            <PrognoseWidget />
          </div>
          <div className="w-2/5 p-5">
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
  );
}
