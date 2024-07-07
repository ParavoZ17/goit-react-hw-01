import css from "./Profile.module.css";


export default function Profile(props) {
    return (
      <div className={css.container}>
        <div className={css.profile}>
          <img src={props.image} alt="User avatar" className={css.img}/>
          <p className={css.name}>{props.name}</p>
          <p className={css.location}>@{props.tag}</p>
          <p className={css.location}>{props.location}</p>
        </div>
        <ul className={css.ul}>
          <li className={css.item}>
            <span>Followers</span>
            <span className={css.accent}>{props.stats.followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span className={css.accent}>{props.stats.views}</span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span className={css.accent}>{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
};  
// name, tag, location, image, stats;