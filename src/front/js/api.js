export async function getEventByZipCode() {
  const response = await fetch(
    "https://api.seatgeek.com/2/events?postal_code=" +
      { zipcode } +
      "&client_id=Mjc0NDkwMDl8MTY1NTI1MDI4Ny4yNTc1MjM4"
  );
  const payload = await response.json();

  return payload.events;
}
