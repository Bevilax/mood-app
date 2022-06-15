


export async function getEvent() {
	const response = await fetch(
		"https://api.seatgeek.com/2/events?postal_code=95125&taxonomies.name=literary&client_id=Mjc0NDkwMDl8MTY1NTI1MDI4Ny4yNTc1MjM4"
	);
	const payload = await response.json();

	return payload;
}