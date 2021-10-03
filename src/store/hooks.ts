import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { TAppDispatch, TRootState } from "."

export const useTypedDispatch = () => useDispatch<TAppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector