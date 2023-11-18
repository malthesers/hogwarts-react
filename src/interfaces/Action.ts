import { Student } from "./Student"

export type ActionType = 'initialised' | 'injected_self' | 'toggled_prefect' | 'toggled_inquisitor' | 'expelled_student' | 'randomised_blood'

export interface Action {
  type: ActionType,
  value?: boolean,
  student?: Student,
  students?: Student[]
}
