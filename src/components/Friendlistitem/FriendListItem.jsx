import list from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={list.item}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={isOnline ? list.Online : list.Offline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
