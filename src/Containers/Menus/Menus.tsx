import { Button } from "@mui/material"

import styles from "./Menus.module.css"

export default function Menus () {

    return (
        <div className={styles.containerBox}>
            
            <Button variant="contained" color="inherit">
                Home
            </Button>
             
            <Button variant="contained" color="inherit">
                Forms
            </Button>
           
            <Button variant="contained" color="inherit">
                Dashbords
            </Button>
           
        </div>
    )

}