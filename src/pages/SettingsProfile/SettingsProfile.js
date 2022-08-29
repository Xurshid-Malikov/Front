import React from "react";

export const SettingsProfile = ({item}) => {
  console.log(item);
  return(
    <div>
      SettingsProfile
      <form>
        <input type="file" />
        <input type="text" defaultValue={item.firt_name} />
        <input type="text" defaultValue={item.last_name} />
        <input type="text" defaultValue={item.phone} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}