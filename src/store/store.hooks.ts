import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import type {RootState,AppDispatch} from './store'
//da se moze dobit po aplikaciji kako triba tipove podataka
export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;