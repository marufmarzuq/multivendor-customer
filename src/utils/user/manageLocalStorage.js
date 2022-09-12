import { decryptData, encryptData } from "../shield";

export const saveToLocalStorage = (data) => {
	const state = encryptData(JSON.stringify(data));
	localStorage.setItem("markutosUser", state);
};

export const loadFromLocalStorage = () => {
	if (localStorage.getItem("markutosUser")) {
		return JSON.parse(decryptData(localStorage.getItem("markutosUser")));
	} else return undefined;
};
