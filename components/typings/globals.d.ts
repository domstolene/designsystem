type Nullable<T> = T | null;
type Callback<T> = (e: T) => void;
type Modify<T, R> = Omit<T, keyof R> & R;
