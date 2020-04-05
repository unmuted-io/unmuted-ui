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