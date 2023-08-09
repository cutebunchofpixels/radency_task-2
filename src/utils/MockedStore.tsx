import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import notesReducer from "../redux/features/notes/notesSlice";
import { RootState } from "../redux/app/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export function MockedStore({
    preloadedState,
    children,
}: {
    preloadedState?: PreloadedState<RootState>;
    children: ReactNode;
}) {
    console.log(preloadedState);

    const store = configureStore({
        reducer: { notes: notesReducer },
        preloadedState: preloadedState,
    });

    return <Provider store={store}>{children}</Provider>;
}
