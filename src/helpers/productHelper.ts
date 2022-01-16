
export const ProductHelper = (str: string, from: number) : string => {
	return str.substr(from)
}

export const getItemStatus = (num: number): string => {
	if (num > 0) {
		return 'В наличии'
	} else {
		return 'Скоро поступит'
	}
}