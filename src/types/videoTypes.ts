export interface Video {
    title: string,
    description: string,
    source: string,
    rand: string,
    processed?: 0 | 1,
    id?: number,
    created_at: string,
    updated_at: string
}


export interface ViewCountUpdate {
    sourceRand: string,
    lastPosition: number
}

export interface ViewCountUpdateWithUser extends ViewCountUpdate {
    user: string
}