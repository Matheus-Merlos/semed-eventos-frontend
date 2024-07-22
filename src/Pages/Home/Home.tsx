import Menus from "../../Containers/Menus/Menus";
import Workspace from "../../Containers/Workspace/Workspace";

import styles from "./Home.module.css"

export default function Home() {

    return (
        <div className={styles.containerGlobal}>
            <Menus/>
            <Workspace/>
        </div>
    )
}