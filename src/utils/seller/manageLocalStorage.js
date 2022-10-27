import { decryptData, encryptData } from "../shield";

export const saveToLocalStorage = (data) => {
	const state = encryptData(JSON.stringify(data));
	localStorage.setItem("markutosSeller", state);
};

export const loadFromLocalStorage = () => {
	if (localStorage.getItem("markutosSeller")) {
		return JSON.parse(decryptData(localStorage.getItem("markutosSeller")));
	} else return undefined;
};


