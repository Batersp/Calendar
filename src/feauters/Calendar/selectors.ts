import {AppRootStateType} from "../../utils/types";
import {IUserType} from "../Login/auth-reducer";

export const selectGuests = (state: AppRootStateType): IUserType[] => state.event.guests