export interface Video {
  title: string
  description: string
  source: string
  rand: string
  processed: string
  id?: number
  created_at: string
  updated_at: string
}

export interface ViewCountUpdate {
  rand: string
  lastPosition: number
  username?: string
}

export interface ViewCountUpdateWithUser extends ViewCountUpdate {
  user: string
}
