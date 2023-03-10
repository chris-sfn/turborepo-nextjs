import Image from "next/image";
import styles from "./HomeLayout.module.scss";
import utilStyles from "@/styles/utils.module.scss";

type Props = {
  children: React.ReactNode;
};

const name = "크리스";

export const siteTitle = "Next.js Sample Website";

const HomeLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="profile"
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
