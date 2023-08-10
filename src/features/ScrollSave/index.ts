export {
    getScrollSave,
    getScrollSaveByPath,
} from "./model/selectors/scrollSelectors";

export {
    scrollSaveReducer,
    scrollSaveActions,
} from "./model/slice/ScrollSaveSlice";

export { ScrollSaveSchema, ScrollRecordSchema } from "./model/type/ScrollSave";
