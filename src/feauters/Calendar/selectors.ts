import {AppRootStateType} from "../../utils/types";
import {IUserType} from "../Login/auth-reducer";
import {ModalFormType} from "../../common/components/Modal/Modal";

export const selectGuests = (state: AppRootStateType): IUserType[] => state.event.guests
export const selectEvents = (state: AppRootStateType): ModalFormType[] => state.event.events