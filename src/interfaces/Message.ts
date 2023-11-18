export interface Message {
  title: string,
  description: string,
  id: number
}

export type Type = 'gender' | 'house' | 'inquisitor' | 'hacking' | 'expulsion1' | 'expulsion2' | 'expulsion3' | 'curse'