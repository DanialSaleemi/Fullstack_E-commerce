"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>
    <div className="max-w-7xl mx-auto min-h-fit">
    {children}
    <Toaster
    position="top-right"
    reverseOrder={false}/>
    </div>
    </Provider>;
};

export default Providers;