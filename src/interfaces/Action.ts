import { Student } from "./Student"

export type Action =
  | InitialisedAction
  | InjectedSelfAction
  | ToggledPrefectAction
  | ToggledInquisitorAction
  | ExpelledStudentAction
  | RandomisedBloodAction

export interface InitialisedAction {
  type: 'initialised',
  students: Student[],
}

export interface InjectedSelfAction {
  type: 'injected_self',
  student: Student
}

export interface ToggledPrefectAction {
  type: 'toggled_prefect',
  student: Student
}

export interface ToggledInquisitorAction {
  type: 'toggled_inquisitor',
  student: Student,
  value: boolean
}

export interface ExpelledStudentAction {
  type: 'expelled_student',
  student: Student
}

export interface RandomisedBloodAction {
  type: 'randomised_blood',
  student: Student
}