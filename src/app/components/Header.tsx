import { Box, Card, CardContent, Typography } from "@mui/material"
import iconData from '@/assets/icons/data.svg'
import Image from 'next/image'

const Header = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ width: '100%', height: '60px' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h1" component="h1">
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ color: 'primary.main' }}>WT10 &nbsp; </Box>APPLICATION ANALYTICS
                        </Box>
                    </Typography>

                    <Image
                        src={iconData}
                        alt=""
                    />
                </CardContent>
            </Card>
        </Box>
    )
}

export default Header