
export const getCardsHotel = async (city, checkIn, checkOut) => {
    return fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&limit=50&checkIn=${checkIn}&checkOut=${checkOut}`)
      .then(res => {
        if (res.ok) {
            return res.json()
          } else {
           return []
          }
      })
}