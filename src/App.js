import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, KitchenContainer, MainContainer  } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import StaffConatiner from "./components/StaffConatiner";
import ChefContainer from "./components/ChefContainer";
import DeliveryBoyContainer from "./components/DeliveryBoyContainer";
import Waiter from "./components/Waiter";
import BikeDelivery from "./components/BikeDelivery";
import TakeAway from "./components/TakeAway";
import DineIn from "./components/DineIn";
// import StaffConatiner from "./components/StaffConatiner";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/kitchen" element={<KitchenContainer />} />
            {/* <Route path="/staff" element={<StaffContainer />} /> */}
            <Route path="/staff" element={<StaffConatiner/>}/>
            <Route path="/chef" element={<ChefContainer/>}/>
            <Route path="/rider" element={<DeliveryBoyContainer/>}/>
            <Route path="/waiter" element={<Waiter/>}/>
            <Route path="/bike-delivery" element={<BikeDelivery/>}/>
            <Route path="/takeaway" element={<TakeAway/>}/>
            <Route path="/dine-in" element={<DineIn/>}/>
            

          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
