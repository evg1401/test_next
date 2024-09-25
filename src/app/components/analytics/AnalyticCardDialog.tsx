import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { useState } from "react";

const AnalyticCardDialog = ({ open, title, onClose, onSave }: { open: boolean; title: string; onSave: (param: number) => void; onClose: (param: boolean) => boolean }) => {
    const [targetValue, setFormValue] = useState<number | undefined>(undefined);

    const handleClose = () => {
        onClose(false)
    };

    const saveField = () => {
        if (targetValue) onSave(targetValue)
    }

    return (
        <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ textAlign: 'center' }}>Изменить цель {title}</DialogTitle>

            <DialogContent sx={{ minWidth: '350px' }}>
                <TextField type="number" label="новая цель" variant="outlined" value={targetValue} onChange={e => setFormValue(parseInt(e.target.value, 10))} fullWidth />
            </DialogContent>

            <DialogActions sx={{ paddingY: '16px', paddingX: '32px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box>
                        <Button variant="outlined" onClick={handleClose}>Отмена</Button>
                    </Box>

                    <Box>
                        <Button variant="contained" onClick={saveField}>Сохранить</Button>
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default AnalyticCardDialog