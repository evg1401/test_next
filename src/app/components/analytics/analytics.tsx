import { Box, Card, CardContent, Typography } from "@mui/material";
import iconArrowUp from '@/assets/icons/arrow_up.svg'
import iconEdit from '@/assets/icons/edit.svg'
import Image from 'next/image'
import AnalyticCardDialog from "./AnalyticCardDialog";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

interface Props {
    title: string;
    keyValue: string;
    count: number;
    sum: number;
    plan: number;
    submitAnalytics: (targetValue: { [key: string]: number }) => void
}


const AnalyticItem = ({ ...props }: Props) => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleSave = async (targetValue: number) => {
        props.submitAnalytics({ [props.keyValue]: targetValue })
    }

    const perValue = Math.round((props.count / props.plan) * 100)
    const percent = perValue < 100 ? { current: perValue, over: 0 } : { current: 100, over: perValue - 100 }
    return (
        <>
            <Box sx={{ marginBottom: '16px' }}>
                <Typography variant="h1" component={'span'} fontWeight={600} fontSize={49}>
                    {props.title}
                </Typography>
            </Box>

            <Card sx={{ width: '100%', paddingInline: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3}>
                <CardContent>
                    <Box sx={{ marginBottom: '8px' }}>
                        <Typography variant="h3" component={'span'}>
                            {props.count} заявки
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: '8px' }}>
                        <Typography variant="h3" component={'span'}>
                            {props.sum} ₽
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', marginBottom: '8px' }}>
                        <Typography component={'span'} fontSize={18}>
                            Цель на день: <Typography component={'span'} fontSize={18} color="success.main">{props.plan} заявок</Typography>
                        </Typography>

                        <Box sx={{ marginInline: '5px' }} onClick={() => setDialogOpen(true)} >
                            <Image
                                src={iconEdit}
                                alt=""
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={iconArrowUp}
                                alt=""
                            />

                            <Typography component={'span'} fontSize={18} fontWeight={600} sx={{ marginInline: '5px' }}>
                                {props.plan}
                            </Typography>
                        </Box>

                        <Box sx={{ color: 'secondary.main' }}>
                            {percent.current + percent.over}%
                        </Box>
                    </Box>

                    <ProgressBar over={percent.over} current={percent.current} />
                </CardContent>

                {isDialogOpen && (
                    <AnalyticCardDialog title={props.title} open={isDialogOpen} onSave={handleSave} onClose={setDialogOpen as (param: boolean) => boolean} />
                )}
            </Card>
        </>
    )
}

export default AnalyticItem