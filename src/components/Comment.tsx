import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.scss";

interface CommentsProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentsProps) {
  const [clap, setClap] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleNewClap() {
    setClap((oldClaps) => ++oldClaps);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasborder={false}
        src="https://avatars.githubusercontent.com/u/25964446?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Augusto Marsola</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewClap}>
            <ThumbsUp />
            Aplaudir <span>{clap}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
