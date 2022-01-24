
export const sliceString = (str: string, from: number) : string => {
	return str.substr(from)
}

export const getItemStatus = (num: number): string => {
	if (num > 0) {
		return 'В наличии'
	} else {
		return 'Скоро поступит'
	}
}

export const getFindStatus = (num: number): string => {
	if (num === 0) {
		return 'Ничего не найдено'
	}
	else if (num === 1) {
		return `Найден ${num} товар`
	}
	else if (num > 1 && num <= 4) {
		return `Найдено ${num} товара`
	} else {
		return `Найдено ${num} товаров`
	}
}