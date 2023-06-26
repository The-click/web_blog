import { createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export type { StateSchema, ReduxStoreWithManager } from "./config/StateSchema";

export { StoreProvider, createReduxStore };
