const pluck = (rooms) => {
  let room_id // load empty variable [string] into memory

  for (const [id] of rooms.entries()) {
    room_id = id //overwrite empty variable with value
  }
  return room_id
}

const join = async ({ socket, io }) => {}
export default join
