import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

import styles from "./Workspace.module.css"
import { useState } from "react";

export default function Workspace () {

    const [formData, setFormData] = useState({
        file_path: "",
        event_id: "",
        filters: {
            placesworks: [],
            roles: []
        }
    })

    const [eventsList, setEventsList] = useState<any[]>([{event_name: "teste", id: "01"}]);
    const [placeworksList, setPlaceworksList] = useState<any[]>([{placework: "teste", id: "01"}]);
    const [rolesList, setRolesList] = useState<any[]>([{role: "teste", id: "01"}]);

    const [event, setEvent] = useState<string>("");
    const [placeworks, setPlaceworks] = useState<string>("");
    const [roles, setRoles] = useState<string>("");

    const handleEventChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.event_name,
        }));
    };

    const handlePlaceworkChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.placework_name,
        }));
    };

    const handleRoleChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.role_name,
        }));
    };

    const teste = () => {
        console.log(formData)
    }

    return (
        <div className={styles.containerBox}>

            <FormControl variant="outlined">
                <InputLabel id="events-label">Evento</InputLabel>
                    <Select
                    name="event_id"
                    label="Evento"
                    value={event}
                    onChange={handleEventChange}
                    >
                        {eventsList.map((value, index) => (
                            <MenuItem key={index} value={value}>
                                {value.event_name}
                            </MenuItem>
                        ))}
                    </Select>
            </FormControl>
            
            <FormControl variant="outlined">
                <InputLabel id="placeworks-label">Local de Trabalho</InputLabel>
                    <Select
                    name="placework"
                    label="Local de Trabalho"
                    value={placeworks}
                    onChange={handlePlaceworkChange}
                    >
                        {placeworksList.map((value, index) => (
                            <MenuItem key={index} value={value}>
                                {value.placework}
                            </MenuItem>
                        ))}
                    </Select>
            </FormControl>

            <FormControl variant="outlined">
                <InputLabel id="roles-label">Funções / Cargos</InputLabel>
                    <Select
                    name="role"
                    label="Funções / Cargo"
                    value={roles}
                    onChange={handleRoleChange}
                    >
                        {rolesList.map((value, index) => (
                            <MenuItem key={index} value={value}>
                                {value.role}
                            </MenuItem>
                        ))}
                    </Select>
            </FormControl>

            <Button onClick={teste}>Teste</Button>
            
        </div>
    )

}