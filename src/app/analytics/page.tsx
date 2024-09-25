import { getAllAnalytics, getAllTargetsAnalytics } from "@/app/services/analyticsService";
import AnalyticsCard from "../components/analytics/AnalyticCard";

export default async function Analytics() {
    const [d1, d2] = await Promise.all([getAllAnalytics(), getAllTargetsAnalytics()])

    return (
        <AnalyticsCard data={{ ...d1, ...d2 }} />
    );
}
