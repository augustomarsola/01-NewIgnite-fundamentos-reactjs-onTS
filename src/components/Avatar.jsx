import styles from "./Avatar.module.scss";

export function Avatar({ hasborder = true, src }) {
  return (
    <img
      className={hasborder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
