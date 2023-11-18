import { Student } from "./Student"

export type ActionType = 'initialised' | 'injected_self' | 'toggled_inquisitor' | 'expelled_student' | 'randomised_blood'

export interface Action {
  type: ActionType,
  student?: Student
}
