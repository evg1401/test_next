'use client'

import { Box, Grid2 } from "@mui/material";
import { useState } from "react";
import AnalyticItem from "./analytics";
import Header from "../Header";
import { saveTargetValue } from "@/app/services/analyticsService";

interface Props {
    data: {
        'day_plan': number;
        'count_day': number;
        'sum_day': number;
        'week_plan': number;
        'count_week': number;
        'sum_week': number;
        'month_plan': number;
        'count_month': number;
        'sum_month': number;
    }
}
const AnalyticsCard = ({ data }: Props) => {
    const [analyticData, setAnalyticData] = useState({ ...data })

    const onSubmitAnalytics = async (e: any) => {
        const { week_plan, month_plan, day_plan } = analyticData

        const result = await saveTargetValue({ week_plan, month_plan, day_plan, ...e })
        setAnalyticData({ ...analyticData, ...result })
    }
    const planAnalyticsList = [
        {
            day: {
                plan: analyticData['day_plan'], count: analyticData['count_day'], sum: analyticData['sum_day']
            }
        },

        {
            week: {
                plan: analyticData['week_plan'], count: analyticData['count_week'], sum: analyticData['sum_week']
            }
        },

        {
            month: {
                plan: analyticData['month_plan'], count: analyticData['count_month'], sum: analyticData['sum_month']
            }
        },
    ]

    const AnalyticsResult = () => planAnalyticsList.map((x, i) => {
        if (x.day) {
            return (
                <Grid2 key={i} size={{ xl: 4, lg: 4, md: 6, sm: 12 }}>
                    <AnalyticItem title="за день" keyValue={'day_plan'} count={x.day.count} sum={x.day?.sum} plan={x.day?.plan} submitAnalytics={onSubmitAnalytics} />
                </Grid2>)
        }
        else if (x.week) {
            return (
                <Grid2 key={i} size={{ xl: 4, lg: 4, md: 6, sm: 12 }}>
                    <AnalyticItem title="за неделю" keyValue={'week_plan'} count={x.week?.count} sum={x.week?.sum} plan={x.week?.plan} submitAnalytics={onSubmitAnalytics} />
                </Grid2>)
        }
        else if (x.month) {
            return (
                <Grid2 key={i} size={{ xl: 4, lg: 4, md: 6, sm: 12 }}>
                    <AnalyticItem title="за месяц" keyValue={'month_plan'} count={x.month?.count} sum={x.month?.sum} plan={x.month?.plan} submitAnalytics={onSubmitAnalytics} />
                </Grid2>)
        }
    })

    return (
        <>
            <Header />
            <div className="spacer-vertical"></div>

            <Box>
                <Grid2 container spacing={2}>
                    <AnalyticsResult />
                </Grid2>
            </Box>
        </>
    )
}

export default AnalyticsCard