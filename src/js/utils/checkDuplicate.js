export const isValDuplicate = (array) => {
	const isDup = array.some((x) => {
		return array.indexOf(x) !== array.lastIndexOf(x)
	})

	return isDup;
}