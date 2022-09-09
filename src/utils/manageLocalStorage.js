import { decryptData, encryptData } from "./shield";

export const saveToLocalStorage = (data) => {
	const state = encryptData(JSON.stringify(data));
	localStorage.setItem("markutos", state);
};

export const loadFromLocalStorage = () => {
	if (localStorage.getItem("markutos")) {
		return JSON.parse(decryptData(localStorage.getItem("markutos")));
	} else return undefined;
};
