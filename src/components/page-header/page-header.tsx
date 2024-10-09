import * as styles from "./styles.css";

export default function PageHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </header>
  );
}
