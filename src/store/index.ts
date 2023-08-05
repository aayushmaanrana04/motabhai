import { writable } from 'svelte/store';
// type userStoreType = {
// 	uid: string | undefined;
// 	displayName: string | undefined;
// 	email: string | undefined;
// 	isLoggedIn: boolean;
// };
// export const userStore = writable<userStoreType>({
// 	uid: undefined,
// 	displayName: undefined,
// 	email: undefined,
// 	isLoggedIn: false
// });

type User = {
	uid: string | null;
	email: string | null;
};

export type gameDataType = {
	id: number;
	walletAddress: string;
	amount: string;
	token: string;
	chainName: string;
	numberOfTransactions: number;
	score: number;
};
export const auth = writable<User | null>(null);

export const isLoggedIn = writable<boolean>(false);

export const gameData = writable<gameDataType[]>();
