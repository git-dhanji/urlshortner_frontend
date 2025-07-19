
import { useParams } from "@tanstack/react-router";
import AnalyticsMainSections from "../components/analytics/AnalyticsMainSections";
import { useEffect } from "react";
import fetchAnalytics from "../apis/analytics.api";


export default function AnalyticsPage() {
  const { shortId } = useParams({ from: '/user/analytics/$shortId' })
  useEffect(() => {
    if (shortId) {
      fetchAnalytics(shortId);
    }
  }, [shortId]);


  return (
    <>
      <AnalyticsMainSections
        shortId={shortId}
      />
    </>
  )
}
