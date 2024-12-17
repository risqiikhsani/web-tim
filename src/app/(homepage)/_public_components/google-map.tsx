import { GoogleMapsEmbed } from "@next/third-parties/google";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default function GoogleMap() {
  return (
    <div className="py-10">
      <GoogleMapsEmbed
        apiKey={GOOGLE_API_KEY!}
        height={400}
        width="100%"
        mode="place"
        q="TIMCorp,Jakarta,ID"
        center="-6.259741690596165,106.78175217951646"
      />
    </div>
  );
}
