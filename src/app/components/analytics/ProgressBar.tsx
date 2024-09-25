import { Box, LinearProgress } from "@mui/material"

const ProgressBar = ({ current, over }: { current: number, over: number }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <LinearProgress
                sx={{ width: '100%', height: '5px', borderRadius: '10px' }}
                variant="determinate"
                value={current}
            />

            {(over > 0 && <LinearProgress
                sx={{
                    width: `${over}%`,
                    height: '5px', borderRadius: '10px',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: 'red', // Цвет основной полосы
                    },
                }}
                variant="determinate"
                value={100}
            />)}
        </Box>
    )
}

export default ProgressBar