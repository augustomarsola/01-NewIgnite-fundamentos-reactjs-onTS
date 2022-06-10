import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Posts } from "./components/Posts";

import styles from "./App.module.scss";

import "./global.scss";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/augustomarsola.png",
      name: "Augusto Marsola",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👏" },
      {
        type: "paragraph",
        content:
          "Acabei de publicar mais uma contribuição no meu portfólio. Corre lá que está um projeto sensacional.",
      },
      { type: "link", content: "super.proj/megaproj" },
    ],
    publishedAt: new Date("2022-06-06 08:10:10"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diogo Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 🐱‍🏍" },
      {
        type: "paragraph",
        content:
          "Acabei de publicar mais uma contribuição no meu portfólio. Corre lá que está um projeto sensacional.",
      },
      { type: "link", content: "super.proj/megaproj" },
    ],
    publishedAt: new Date("2022-06-07 06:10:10"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Posts
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
